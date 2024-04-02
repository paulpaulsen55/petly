import express from 'express';
import sqlite3 from 'sqlite3';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = new sqlite3.Database(':memory:');

db.run('CREATE TABLE users (username TEXT, password TEXT)');

app.post('/register', (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            db.run(`INSERT INTO users (username, password) VALUES (?, ?)`, [req.body.username, hash], function (err) {
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
    db.get(`SELECT * FROM users WHERE username = ?`, [req.body.username], (err, row) => {
        if (err) {
            res.status(400).json({ error: err.message });
        } else if (!row) {
            res.status(401).json({ message: 'Invalid credentials' });
        } else {
            bcrypt.compare(req.body.password, (row as any).password, (err, result) => {
                if (result) {
                    const token = jwt.sign({ username: (row as any).username }, 'SECRET_KEY', { expiresIn: '1h' });
                    res.status(200).json({ message: 'Authentication successful', token: token });
                } else {
                    res.status(401).json({ message: 'Invalid credentials' });
                }
            });
        }
    });
});

app.listen(3000, () => console.log('Server is running on port 3000'));