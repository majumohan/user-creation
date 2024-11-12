const express =require("express")
const bodyParser =require("body-parser");
const mongoose =require("mongoose");
const userRoutes =require("./routes/userRoutes")


const app =express();
app.use(express.json());

//mongodb connection

mongoose.connect('mongodb://localhost:27017/userlogin',{
  
});

const db =mongoose.connection

db.once('open', () => console.log('Connected to MongoDB'));
db.on('error', (err) => console.error('Failed to connect to MongoDB', err));





app.use('/api',userRoutes)

app.get('/',(req,res)=>{
    res.send("welcome to the user api")
})

app.listen(3000,()=>{
    console.log("server started in port 3000 ")
})