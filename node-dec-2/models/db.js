const fs = require('fs').promises;
const path = require('path');

const DB_PATH = path.join(__dirname, '..', 'db.json');

// Read and parse the DB file. If file doesn't exist, return an empty object.
async function readDB() {
	try {
		const raw = await fs.readFile(DB_PATH, 'utf8');
		return JSON.parse(raw);
	} catch (err) {
		if (err.code === 'ENOENT') {
			// file missing -> treat as empty DB
			return {};
		}
		throw err;
	}
}

// Write the object to disk as pretty JSON.
async function writeDB(data) {
	const dir = path.dirname(DB_PATH);
	// ensure directory exists (usually exists already)
	try {
		await fs.mkdir(dir, { recursive: true });
	} catch (e) {
		// ignore
	}
	const json = JSON.stringify(data, null, 2);
	await fs.writeFile(DB_PATH, json, 'utf8');
}

// Get a top-level key from the DB (returns undefined if not present)
async function get(key) {
	const db = await readDB();
	return db[key];
}

// Set a top-level key and persist
async function set(key, value) {
	const db = await readDB();
	db[key] = value;
	await writeDB(db);
	return db;
}

// Ensure the key is an array and push an item, then persist.
// Returns the pushed item.
async function pushToArray(key, item) {
	const db = await readDB();
	if (!Array.isArray(db[key])) {
		db[key] = [];
	}
	db[key].push(item);
	await writeDB(db);
	return item;
}

module.exports = {
	readDB,
	writeDB,
	get,
	set,
	pushToArray
};