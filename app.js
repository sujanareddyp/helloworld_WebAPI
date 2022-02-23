const express = require('express');
const app = express();
app.get('/helloworld', (req,res)=>{
    res.send('Hello World');
    })
const port = 4200;
app.listen(port,()=> {
console.log('listen port 4200');
})