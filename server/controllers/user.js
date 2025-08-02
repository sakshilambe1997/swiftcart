import User from "../models/User.js";

const postSignup = async (req, res) => {
    const {name, email, password ,phone, address, dob} = req.body;

    const user = new User({ 
        name,
        email,
        password,
        phone,
        address,
        dob: new Date(dob) ,
        phone
    })
    try {
        const savedUser = await user.save();
        res.status(201).json({
            success: true,
             message: "User signed up successfully", 
              data: savedUser 
            });
    } catch (error) {
        
        res.status(500).json({ 
            success: false,
            message: error.message ,
            data: null
        });
    }

}
export { postSignup };
