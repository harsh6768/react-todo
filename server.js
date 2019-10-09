const express=require('express');
const bodyParser=require('body-parser');
const mainRoutes=require('./routes/routes');
require('dotenv').config();
const app=express();
//body parser to parse the body of the request
app.use(bodyParser.urlencoded({ useNewUrlParser: true}));
app.use(bodyParser.json());



app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//it will use / as default route
app.use("/", mainRoutes);

const port = process.env.PORT || 3003;
app.listen(port,(req,res)=>{

    console.log(`servers is up on port number ${port}`)
})