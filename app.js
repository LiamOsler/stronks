const fs = require('fs');
const express = require ('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(morgan('tiny'));

const { credentials, clusterURL } = require('./credentials.js');
const dbURI = `mongodb+srv://${credentials.username}:${credentials.password}@${clusterURL}`;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("DB Connected"); app.listen(3000); console.log("Listening on port 3000")})
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.render('index');
});

app.use((req, res) => {
    res.status(404).render('404');
});
