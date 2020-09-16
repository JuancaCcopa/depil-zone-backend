const express = require('express');
const cors = require('cors');

const app = express();
//app.use(express.static('uploads'));

app.use('/uploads',express.static('uploads'));

// settings

app.set('port', process.env.PORT || 4000);


// middlewares 
app.use(cors());
app.use(express.json());

// routes
//app.use('/user',(req,res)=> res.send('Users Router'));
//app.use('/notes',(req,res)=> res.send('notes Router'));

app.use('/api/usuario', require('./routes/usuario'));
app.use('/api/perfil', require('./routes/perfil'));

module.exports = app;
