import React, { useState } from "react";
import { motion } from "framer-motion";
import { auth, googleProvider } from "./firebase.js";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Sign-up successful!");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google Sign-in successful!");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-700">Sign Up</h2>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        
        <form className="mt-6" onSubmit={handleSignUp}>
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="mt-4">
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full mt-6 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>
        
        <div className="flex items-center my-4">
          <div className="flex-1 border-t"></div>
          <p className="px-2 text-gray-500">OR</p>
          <div className="flex-1 border-t"></div>
        </div>
        
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-3 py-3 bg-gray-100 border rounded-lg hover:bg-gray-200 transition"
        >
          <FcGoogle size={24} /> Continue with Google
        </button>
      </motion.div>
    </div>
  );
}
