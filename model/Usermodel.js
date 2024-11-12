const mongoose =require('mongoose');



const userSchema = new mongoose.Schema({



    name:{
        type:String,
        required:[true,"name is required"],
        trim: true


    },
    email:{
        type:String,
        required:[true,"email is required"],
        match:[/\S+@\S+\.\S+/,'email is invalid'],
        unique: true,
        lowercase:true,
        trim:true

    },
    age:{
        type:Number,
        required:true,
        min:[0,'age cannot be negative']
    }
},{timestamps:true});

const user = mongoose.model('User',userSchema);
module.exports =user