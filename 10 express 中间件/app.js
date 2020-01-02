const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send('vs code');
});

app.listen(3000);