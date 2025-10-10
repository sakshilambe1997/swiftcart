import User from "../models/User.js";

const postSignup = async (req, res) => {
    const { name, email, password, phone, address, dob } = req.body;

    const user = new User({
        name,
        email,
        password,
        phone,
        address,
        dob: new Date(dob),
        
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
            message: error.message,
            data: null
        });
    }

}

const postLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({
            email,password
           
        });

        if (user) {
            return res.status(200).json({
                success: true,
                message: "User Login Succesfully",
                data: user
            });
        }
        else{
            return res.status(404).json({
                success: false,
                message: "User not found",
                data: null
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
            data: null
        });

    }
}
export { postSignup, postLogin };
