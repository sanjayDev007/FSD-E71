const http = require('http');
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'contacts.json');

function readContacts() {
	if (!fs.existsSync(DATA_FILE)) {
		fs.writeFileSync(DATA_FILE, '[]');
	}
	const data = fs.readFileSync(DATA_FILE, 'utf8');
	return JSON.parse(data);
}

function writeContacts(contacts) {
	fs.writeFileSync(DATA_FILE, JSON.stringify(contacts, null, 2));
}

function generateId() {
	return Math.random().toString(36).substr(2, 9);
}

function sendJson(res, status, data) {
	res.writeHead(status, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
	res.end(JSON.stringify(data));
}

function parseBody(req, callback) {
	let body = '';
	req.on('data', chunk => { body += chunk; });
	req.on('end', () => {
		try {
			callback(JSON.parse(body));
		} catch {
			callback(null);
		}
	});
}

const server = http.createServer((req, res) => {
	const url = new URL(req.url, `http://${req.headers.host}`);
	const method = req.method;

	// CORS preflight
	if (method === 'OPTIONS') {
		res.writeHead(204, {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type',
		});
		res.end();
		return;
	}

	// GET /contacts or /contacts?search=...
	if (url.pathname === '/contacts' && method === 'GET') {
		let contacts = readContacts();
		const search = url.searchParams.get('search');
		if (search) {
			const s = search.toLowerCase();
			contacts = contacts.filter(c =>
				c.name.toLowerCase().includes(s) ||
				c.phone.toLowerCase().includes(s)
			);
		}
		sendJson(res, 200, contacts);
		return;
	}

	// POST /contacts
	if (url.pathname === '/contacts' && method === 'POST') {
		parseBody(req, body => {
			if (!body || !body.name || !body.phone) {
				sendJson(res, 400, { error: 'Name and phone required' });
				return;
			}
			const contacts = readContacts();
			const newContact = { id: generateId(), name: body.name, phone: body.phone };
			contacts.push(newContact);
			writeContacts(contacts);
			sendJson(res, 201, newContact);
		});
		return;
	}

	// PUT /contacts/:id
	if (url.pathname.startsWith('/contacts/') && method === 'PUT') {
		const id = url.pathname.split('/')[2];
		parseBody(req, body => {
			if (!body || (!body.name && !body.phone)) {
				sendJson(res, 400, { error: 'Name or phone required' });
				return;
			}
			const contacts = readContacts();
			const idx = contacts.findIndex(c => c.id === id);
			if (idx === -1) {
				sendJson(res, 404, { error: 'Contact not found' });
				return;
			}
			if (body.name) contacts[idx].name = body.name;
			if (body.phone) contacts[idx].phone = body.phone;
			writeContacts(contacts);
			sendJson(res, 200, contacts[idx]);
		});
		return;
	}

	// DELETE /contacts/:id
	if (url.pathname.startsWith('/contacts/') && method === 'DELETE') {
		const id = url.pathname.split('/')[2];
		const contacts = readContacts();
		const idx = contacts.findIndex(c => c.id === id);
		if (idx === -1) {
			sendJson(res, 404, { error: 'Contact not found' });
			return;
		}
		const deleted = contacts.splice(idx, 1)[0];
		writeContacts(contacts);
		sendJson(res, 200, deleted);
		return;
	}

	// Not found
	sendJson(res, 404, { error: 'Not found' });
});

const PORT = 3000;
server.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
