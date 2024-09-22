import React from 'react';
import { auth, googleProvider } from './Firebase'; // Adjust path as needed
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"; // Import GoogleAuthProvider
import axios from 'axios';

const GoogleSignIn = () => {
    async function handleSignIn() {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user; // Get user information
            const idToken = await user.getIdToken(); // Get the ID token

            console.log("User signed in: ", user);
            await getUserContext(idToken); // Pass the ID token to getUserContext
        } catch (error) {
            console.error("Login error:", error);
            // Handle Errors here (e.g., show error message to user)
        }
    }

    async function getUserContext(idToken) {
        try {
            console.log("in get user context");
            const res = await axios.post(
                "http://localhost:5000/login/verify-token",
                {}, // Data to send (empty if none)
                {
                    headers: {
                        Authorization: `Bearer ${idToken}`, // Use the ID token here
                    },
                }
            );
    
            console.log("User context response:", res.data); // Log the response for debugging
        } catch (error) {
            console.error("Error fetching user context:", error);
            // Handle error (e.g., show error message to user)
        }
    }
    
    return (
        <div className="h-[50vh] flex items-center justify-center">
            <button onClick={handleSignIn} className="bg-blue-600 text-white px-4 py-2 rounded">
                Sign in with Google
            </button>
        </div>
    );
};

export default GoogleSignIn;
