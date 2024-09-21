import React from 'react';
import { auth, googleProvider } from './Firebase'; // Adjust path as needed
import { signInWithPopup } from "firebase/auth"; // Make sure this import is included

const GoogleSignIn = () => {
    const handleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            console.log("User signed in: ", user);
        } catch (error) {
            console.error("Error during sign-in: ", error);
        }
    };

    return (
        <div className="h-[50vh] flex items-center justify-center">
            <button onClick={handleSignIn} className="bg-blue-600 text-white px-4 py-2 rounded">
                Sign in with Google
            </button>
        </div>
    );
};

export default GoogleSignIn;
