//here is where the app run

const express = require('express');
const app= express();


const db = require('./util/database');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const router_Driver= require('./routes/driver')

app.use(router_Driver);

const PORT =process.env.PORT||3500;
app.listen(PORT, (req,res) =>{

    console.log('server in  http://localHost:'+ PORT);
    })
    