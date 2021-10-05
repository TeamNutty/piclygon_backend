const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

// register middleware
exports.register = async (req, res, next) => {
    try {
        // req.body: username ,email, password, confirmPassword
        const { firstName, lastName, email, password, confirmPassword, profilePicture, isAdmin } = req.body;

        // check password match confirm password
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "password and confirm password did not match" });
        }

        if (firstName.trim() === "") {
            return res.status(400).send({ message: "plz insert firstname" });
        }

        if (lastName.trim() === "") {
            return res.status(400).send({ message: "plz insert lastname" });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            profilePicture,
        });
        res.status(200).json({ message: "your account has been created" });
    } catch (err) {
        next(err);
    }
};

// login middleware
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        // SELECT * FROM users WHERE username = username
        const user = await User.findOne({ where: { email } });
        // username not found
        if (!user) {
            return res.status(400).json({ message: "invalid email or password" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        // password did not match
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "invalid username or password" });
        }

        const payload = {
            id: user.id,
            email: user.email,
            isAdmin: user.isAdmin,
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "10d" });
        res.json({ message: "success logged in", token });
    } catch (err) {
        next(err);
    }
};
