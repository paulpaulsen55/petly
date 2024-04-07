import express from 'express';
import sqlite3 from 'sqlite3';
import bcrypt from 'bcrypt';

const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = new sqlite3.Database(':memory:');

db.run('CREATE TABLE users (name TEXT, password TEXT, money INTEGER DEFAULT 30)');

db.run('CREATE TABLE pets (name TEXT, owner TEXT DEFAULT "", color INTEGER, level INTEGER DEFAULT 1, price INTEGER, happiness INTEGER DEFAULT 100)', [], (err) => {
    if (err) {
        console.error(err.message);
    } else {
        db.run(`INSERT INTO pets (name, color, price) VALUES (?, ?, ?)`, ['Tiger', 0, 5]);
        db.run(`INSERT INTO pets (name, color, price) VALUES (?, ?, ?)`, ['Fluffy', 1, 10]);
        db.run(`INSERT INTO pets (name, color, price) VALUES (?, ?, ?)`, ['Spot', 2, 15]);
        db.run(`INSERT INTO pets (name, color, price) VALUES (?, ?, ?)`, ['Goldie', 3, 20]);
        db.run(`INSERT INTO pets (name, color, price) VALUES (?, ?, ?)`, ['Rover', 4, 30]);
        db.run(`INSERT INTO pets (name, color, price) VALUES (?, ?, ?)`, ['Whiskers', 5, 40]);
        db.run(`INSERT INTO pets (name, color, price) VALUES (?, ?, ?)`, ['Mittens', 6, 50]);
        db.run(`INSERT INTO pets (name, color, price) VALUES (?, ?, ?)`, ['Fluffington', 7, 60]);
        db.run(`INSERT INTO pets (name, color, price) VALUES (?, ?, ?)`, ['Socks', 8, 80]);
        db.run(`INSERT INTO pets (name, color, price) VALUES (?, ?, ?)`, ['Buddy', 9, 100]);
        db.run(`INSERT INTO pets (name, color, price) VALUES (?, ?, ?)`, ['Patches', 10, 120]);
        db.run(`INSERT INTO pets (name, color, price) VALUES (?, ?, ?)`, ['Sushi', 11, 140]);
        db.run(`INSERT INTO pets (name, color, price) VALUES (?, ?, ?)`, ['Picatzo', 12, 160]);
        db.run(`INSERT INTO pets (name, color, price) VALUES (?, ?, ?)`, ['Fuzzy', 13, 180]);
        db.run(`INSERT INTO pets (name, color, price) VALUES (?, ?, ?)`, ['Outclaw', 14, 200]);
        console.log('Database seeded');
    }
});

app.post('/register', (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            db.run(`INSERT INTO users (name, password) VALUES (?, ?)`, [req.body.name, hash], function (err) {
                if (err) {
                    res.status(400).json({ error: err.message });
                } else {
                    res.status(201).json({ message: 'User created' });
                }
            });
        }
    });
});

app.post('/login', (req, res) => {
    db.get(`SELECT * FROM users WHERE name = ?`, [req.body.name], (err, row) => {
        if (err) {
            res.status(400).json({ error: err.message });
        } else if (!row) {
            res.status(401).json({ message: 'Invalid credentials' });
        } else {
            bcrypt.compare(req.body.password, (row as any).password, (err, result) => {
                if (result) {
                    res.status(200).json({ message: 'Authentication successful', money: (row as any).money});
                } else {
                    res.status(401).json({ message: 'Invalid credentials' });
                }
            });
        }
    });
});

app.post('/checkname', (req, res) => {
    db.get(`SELECT * FROM users WHERE name = ?`, [req.body.name], (err, row) => {
        if (err) {
            res.status(400).json({ error: err.message });
        } else if (row) {
            res.status(409).json({ message: 'name is already taken' });
        } else {
            res.status(200).json({ message: 'name is available' });
        }
    });
});

app.get('/allPets', (req, res) => {
    db.all(`SELECT * FROM pets WHERE owner = ''`, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ pets: rows });
        }
    });
});

app.get('/pets/:owner', (req, res) => {
    const owner = req.params.owner;
    if (!owner) {
        res.status(400).json({ error: 'Missing owner parameter' });
        return;
    }

    db.all(`SELECT * FROM pets WHERE owner = ?`, [owner], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ pets: rows });
        }
    });
});

app.post('/adopt', (req, res) => {
    const { owner, petName } = req.body;
    if (!owner || !petName) {
        res.status(400).json({ error: 'Missing owner or pet name' });
        return;
    }

    db.run(`UPDATE pets SET owner = ? WHERE name = ? AND owner = ''`, [owner, petName], function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (this.changes === 0) {
            res.status(404).json({ message: 'Pet not found or already adopted' });
        } else {
            res.status(200).json({ message: 'Pet adopted successfully' });
        }
    });

    db.get(`SELECT price FROM pets WHERE name = ?`, [petName], (err, row) => {
        if (!err && row) {
            const price = (row as any).price;
            db.run(`UPDATE users SET money = money - ? WHERE name = ? AND money >= ?`, [price, owner, price]);
        }
    });
});

app.post('/updateLevel', (req, res) => {
    const { petName, level, owner } = req.body;
    if (!petName || !level || !owner) {
        res.status(400).json({ error: 'Missing pet or level or owner' });
        return;
    }

    db.get(`SELECT * FROM pets WHERE name = ? AND owner = ?`, [petName, owner], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (!row) {
            res.status(404).json({ message: 'Pet not found or not owned by user' });
        } else {
            db.run(`UPDATE pets SET level = ? WHERE name = ?`, [level, petName], function (err) {
                if (err) {
                    res.status(500).json({ error: err.message });
                } else if (this.changes === 0) {
                    res.status(404).json({ message: 'Pet not found' });
                } else {
                    db.run(`UPDATE users SET money = money + 10 WHERE name = ?`, [owner], function (err) {
                        if (err) {
                            res.status(500).json({ error: err.message });
                        } else {
                            res.status(200).json({ message: 'Money added successfully' });
                        }
                    });
                }
            });
        }
    });
});


app.listen(3000, () => console.log('Server is running on port 3000'));