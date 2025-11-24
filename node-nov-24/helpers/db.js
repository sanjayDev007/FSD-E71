const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../db.json');

function readDB() {
  const data = fs.readFileSync(dbPath, 'utf-8');
  return JSON.parse(data);
}

function writeDB(data) {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf-8');
}
/**
 * {
 * users: [],
 * products: [],
 * orders: [],
 * ...
 * }
 * 
 */


let collections = {
    users: {
        getAll: function() {
            const db = readDB();
            return db.users;
        },
        add: function(user) {
            const db = readDB();
            let maxId = 0;
            db.users.forEach(u => {
                if (u.id > maxId) {
                    maxId = u.id;
                }
            });
            user.id = maxId + 1;
            db.users.push(user);
            writeDB(db);
        },
        findById: function(id) {
            const db = readDB();
            return db.users.find(user => user.id == id);
        },
        deleteById: function(id) {
            const db = readDB();
            db.users = db.users.filter(user => user.id != id);
            writeDB(db);
        },
        updateById: function(id, updatedUser) {
            const db = readDB();
            const index = db.users.findIndex(user => user.id == id);
            if (index === -1) {
                return null; // not found
            }
            // Prevent changing the id and merge updates
            const existing = db.users[index];
            const updated = { ...existing, ...updatedUser, id: existing.id };
            db.users[index] = updated;
            writeDB(db);
            return updated;
        }
    }
}

module.exports = collections;