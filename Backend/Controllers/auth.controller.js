import generatetokenAndSetCookie from "../Utils/generate_Token.js";
import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';

export const singup = async (req, res) => {
    try {
        const { fullname, username, password, confirmPassword, gender } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "password does not match...." });
        }

        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ error: "Username Allredy exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hasedpassword = await bcrypt.hash(password, salt);


        const boyprofilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlprofilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullname,
            username,
            password: hasedpassword,
            gender,

            profilepic: gender == "male" ? boyprofilepic : girlprofilepic
        })

        if (newUser) {
            generatetokenAndSetCookie(newUser._id, res);

            await newUser.save();

            res.status(200).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username,
                profilepic: newUser.profilepic
            })
        } else {
            res.status(400).json({ Eror: "invalid Data.." });
        }

    } catch (error) {
        console.log("error", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid Email or Password" });
        }
        generatetokenAndSetCookie(user._id, res);
        res.status(200).json({
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            profilepic: user.profilepic
        })

    } catch (error) {
        console.log("error in Login Componets", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const logout = async(req, res) => {
    try {
           res.cookie("jwt","",{maxAge:0});
           res.status(200).json({message:"logged out successfull"});

    } catch (error) {
        console.log("error in logout Componets", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}