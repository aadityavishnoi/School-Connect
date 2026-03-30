import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import db from "../config/db.js";


export const LoginUser = (req, res) => {
    const {email, password} = req.body;

    const query = "SELECT * FROM users WHERE email = ?";

    db.query(query, [email], async (err, results) => {
        if(err) {
            return res.status(500).json({message: "Server Error!", err});
        }

        if(results.length === 0) {
            return res.status(400).json({message: "Invalid Email Or Password!"});
        }

        const user = results[0];

        //const isMatch = await bcrypt.compare(password, user.password);
        const isMatch = password === user.password;
        if(!isMatch){
            return res.status(400).json({
                message: "Invalid Email Or Password"
            });
        }

        const token = jwt.sign(
            {id: user.id, role: user.role},
            process.env.JWT_SECRET,
            {expiresIn: "1d"}
        );
        res.json({
            token,
            user: {
                id: user.id,
                name: user.name,
                role: user.role,
            },
        });
    });
};