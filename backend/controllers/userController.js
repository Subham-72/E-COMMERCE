import validator from "validator";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";


const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

// Routes for user
const loginUser = async (req,res) => {

    try {

        const {email,password} = req.body;

        const user = await userModel.findOne({email})

        if(!user) {
            return res.json({ success: false, message: "User doesn't exists"});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(isMatch) {
            const token = createToken(user._id)
            res.json({success: true, token})
        }
        else {
            res.json({success: false, message: "Invalid Credentials"})
        }
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }


}

// Routes for user register 
const registerUser = async (req,res) => {

    try {

        const { name, email, password} = req.body;

        // Validate that all fields are provided
        if(!name || !email || !password) {
            return res.json({success: false, message: "All fields are required"});
        }

        // checking user already existing or not
        const exists = await userModel.findOne({email});
        if (exists) {
            return res.json({success:false, message:"User Already Exists"});
        } 
        
        // validation email forget & strong password
        if (!validator.isEmail(email)) {
            return res.json({success:false, message: "Please enter a valid email"});
        }
        if (password.length < 8) {
            return res.json({success:false, message: "Please enter a strong password"});
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name,
            email,
            password:hashedPassword
        })

        const user = await newUser.save()
        
        const token = createToken(user._id)

        res.json({success:true,token})


    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

// Routes for admin login
const adminLogin = async (req,res) => {
    
    try {
        const {email, password} = req.body

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password,process.env.JWT_SECRET);
            res.json({success:true,token})
        } else{
            res.json({success:false,message:"Invalid Credentials"})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }

}

export { loginUser,registerUser,adminLogin}