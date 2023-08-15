
const express = require('express');
const cors = require('cors');
const {mongoose}= require('mongoose');
const app = express();

app.use(cors(
    {
        credentials: true,
        origin: 'http://localhost:3000',
    }
)
    
)

app.get('/test',(req,res)=>
{
    res.json('test works')
});
app.listen(4000)