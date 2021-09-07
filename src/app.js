const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use( require('./routes/app.routes'));

//Static files
app.use(express.static(path.join(__dirname,'../public')))

app.use((req,res)=>{
    res.sendFile(path.join(__dirname,'../public/index.html'));
})

app.listen(8080,()=>{
    console.log('puerto 8080')
});
