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






app.post('/login', (req, res) => {
    if (req.body.login === 'admin@admin.com' && req.body.password === 'admin123') {
        const id = 1;
        const token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 300
        });
        return res.json({ auth: true, token: token });
    }

    res.status(500).json({ message: 'Login inválido!' });
})


app.post('/logout', function (req, res) {
    res.json({ auth: false, token: null });
})


app.get('/login', verifyJWT, (req, res) => {
    res.json([{ id: 1, login: 'admin@admin.com', password: 'admin123' }]);
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


