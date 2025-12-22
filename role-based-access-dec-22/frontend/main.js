let token = null;
// Base API URL (use this variable to point the frontend at the backend)
const apiUrl = 'http://localhost:3000';

function decodeJwtPayload(t) {
  try {
    const payload = t.split('.')[1];
    return JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')));
  } catch (e) {
    return null;
  }
}

document.getElementById('registerBtn').addEventListener('click', async () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;
  const res = await fetch(`${apiUrl}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, role })
  });
  if (res.ok) {
    document.getElementById('loginStatus').textContent = 'Registered. You can now login.';
  } else {
    document.getElementById('loginStatus').textContent = 'Register failed';
  }
});

document.getElementById('loginBtn').addEventListener('click', async () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const res = await fetch(`${apiUrl}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  if (!res.ok) {
    document.getElementById('loginStatus').textContent = 'Login failed';
    return;
  }
  const data = await res.json();
  token = data.token;
  const payload = decodeJwtPayload(token);
  document.getElementById('whoami').textContent = payload && payload.role ? payload.role : 'unknown';
  document.getElementById('loginStatus').textContent = 'Login successful';
  document.getElementById('actions').style.display = 'block';
});

document.getElementById('getSecretBtn').addEventListener('click', async () => {
  if (!token) {
    alert('Not logged in');
    return;
  }
  const res = await fetch(`${apiUrl}/secret`, {
    method: 'GET',
    headers: { Authorization: 'Bearer ' + token }
  });
  if (res.status === 403) {
    document.getElementById('secretBox').style.display = 'block';
    document.getElementById('secretText').textContent = 'You are not an admin. Access denied.';
    return;
  }
  if (!res.ok) {
    document.getElementById('secretBox').style.display = 'block';
    document.getElementById('secretText').textContent = 'Error fetching secret';
    return;
  }
  const data = await res.json();
  document.getElementById('secretBox').style.display = 'block';
  document.getElementById('secretText').textContent = data.secret;
});
