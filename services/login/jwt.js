const http = require('http');
const express = require('express');
const app = express();

require("dotenv-safe").config();
const jwt = require('jsonwebtoken');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const server = http.createServer(app);
server.listen(3000);
console.log("Servidor escutando na porta 3000...")


const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./database.sqlite', (error) => {
    if (error) console.log(error);
});

db.serialize(() => {
    db.run('create table if not exists user (id integer primary key, login text, password text)', (error) => {
        if (error) console.log(error);
    });

    db.run('insert into user (login, password) values (?, ?)', ['admin@admin.com', 'admin123'], (error) => {
        if (error) console.log(error);
    });

});


var urlencodedParser = bodyParser.urlencoded({ extended: false })
db.all('select * from user', (error, rows, next) => {
    let db = rows;
    app.post('/login', urlencodedParser, (req, res, next) => {
        db.forEach((user) => {
            req.body.login === user.login && req.body.password === user.password ?
                res.json({ auth: true, token: jwt.sign(user.id, process.env.SECRET) })
                :
                res.status(500).json({ message: 'Login inválido!' });
        });
        next();
    });
});

db.all('select * from user', (error, rows) => {
    let db = rows;
    db.forEach((user) => {
        app.get('/login', verifyJWT, (req, res) => {
            res.json([{ id: user.id, login: user.login, password: user.password }]);
        });
    })
});

app.post('/logout', function (req, res) {
    res.json({ auth: false, token: null });
})

function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });

        req.userId = decoded.id;
        next();
    });
}

db.close();
