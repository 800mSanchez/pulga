require('dotenv').config();

const express = require('express');
const session = require('express-session');
const massive = require('massive');

const app = express();

const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;

app.use(express.static("."));
app.use(express.json());
app.use(express.static(`${__dirname}/../build`));
app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 72},
    secret: SESSION_SECRET
}));

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
    }).then( db => {
        app.set('db', db)
        console.log('connected to db')
    }).catch( err => console.log(err))



app.listen(SERVER_PORT, () => console.log(`Connected to port ${SERVER_PORT}`));