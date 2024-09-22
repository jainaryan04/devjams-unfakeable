import admin from "../config/firebase.js"
import UserDetails from "../models/userDetails.js";

const authenticateToken = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    console.log('Token received:', token); 

    if (!token) {
        return res.status(401).json({ message: 'Token is missing' });
    }

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        req.user = { email: decodedToken.email };

        console.log(decodedToken.email)

        const user = await UserDetails.findOne({ where: { emailid: decodedToken.email } });

        if (!user) {
            await UserDetails.create({
                emailid: decodedToken.email,
            });
            console.log('New user created:', decodedToken.email);
        }

        next();
    } catch (error) {
        console.error('Token verification error:', error); 
        return res.status(403).json({ message: 'Invalid token', error: error.message });
    }
};

export default authenticateToken;
