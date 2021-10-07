
const mongoose=require('mongoose');
const express=require('express');
const routes = require('./Routes/events_routes');



const {events}=require('./Model/events');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api',routes);
const uri = "mongodb://localhost/yie";

mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("connected to db");
    })
    .catch(()=>{
        console.log("not connected");
    });

const port=3000;
app.listen(port,()=>{
    console.log(`listening at ${port}`);
})

