const express=require('express');    //实例化
const path=require('path');
const bodyParser=require('body-parser');
const cors=require('cors');
const passport=require('passport');
const mongoose=require('mongoose');
const config=require('./config/database-users');


//连接到database
mongoose.connect(config.database);

mongoose.connection.on('connected',() =>{
    console.log('Connected to database '+config.database);
});

mongoose.connection.on('error',(err) =>{
    console.log('Database error '+err);
});

const app=express();

const users = require('./routes/users');

const products=require('./routes/products')

//Port num
const port=3000;

//CORS Middleware
app.use(cors());

//Set public(static) folder
app.use(express.static(path.join(__dirname,'public')));

//Body Parser Middleware
app.use(bodyParser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);



app.use('/users',users);
app.use('/products',products);



//Index Route
app.get('/', (req,res) =>{
    res.send('Invalid Endpoint');
});

//Start Server
app.listen(port, () =>{
    console.log('Server started on port '+port+'...')
});