import React, { useState } from "react";

const Signup = () => {

  const [userName,setUserName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    const formData = {
      userName,
      email,
      password
    };
    console.log(formData)
    setUserName("");
    setEmail("");
    setPassword("");

  }

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex max-w-4xl w-full">
          {/* Left Side - Sign In Section */}
          <div className="w-1/2 bg-gradient-to-b from-blue-500 to-pink-400 p-8 flex flex-col justify-center items-center">
            <h2 className="text-white text-3xl font-bold mb-4">
              Welcome Back!
            </h2>
            <p className="text-white mb-6 text-center">
              To keep connected with us, please login with your personal info.
            </p>
            <button className="btn">SIGN IN</button>
          </div>

          {/* Right Side - Sign Up Form */}
          <div className="bg-gray-200 w-1/2 p-8 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
            <form className="w-full max-w-sm" onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  value={userName}
                  onChange={(e)=>setUserName(e.target.value)}
                  placeholder="User"
                  className="inputOutline"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder="Email"
                  className="inputOutline"
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  placeholder="Password"
                  className="inputOutline"
                />
              </div>
              <button type="submit" className="btn block mx-auto">
                SIGN UP
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
