const User =require('../model/Usermodel');


//create a new user

exports.createUser = async (req,res)=>{

    try{
        const user =new User(req.body);
        await user.save();
        res.status(201).json(user);

    } catch (error) {
        // Check for MongoDB duplicate key error (code 11000)
        if (error.code ===11000) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        // Handle validation errors
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: 'Server error' });
    }

};

// get all users

exports.getUser =async (req,res)=>{
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

//get user by ID

exports.getuserByid = async (req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

//update a user by ID

exports.updateuserByid =async (req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators: true
        });
        if (!user){
            return res.status(404).json({ message: 'user not found'});

        }
        res.status(200).json(user);
    }catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.message });
        }
        if (error.code === 11000) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        res.status(500).json({ message: 'Server error' });
    }
}

//delete a user by id

exports.deleteUser = async(req,res)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}