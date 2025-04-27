import React from 'react'
import { Link } from 'react-router-dom'
import { EnvelopeSimple, LockSimple , Phone, User} from '@phosphor-icons/react';

import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from "../utils/constants"


const Registration = () => {

//   const [firstName, setFirstName] = useState("");
  const [username, setUserName] = useState("");
  const [phone, setphone] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleRegister = async (e) => {
    e.preventDefault();

    // if (!username || !phone || !emailId || !password) {
    //     setError("Please fill in all fields.");
    //     return;
    //   }

    try{
      const res = await axios.post(BASE_URL + "/signup", {
        username,
        emailId,
        phone,
        password,
      }, 
      {
        withCredentials: true,
      }
    );
    console.log("result is:", res);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        return navigate("/signin")
      }, 3000)
    } catch(err) {
      setError(err?.response?.data || "something went wrong");
    }
  }

  const handleShowPassword = () => {
    setShowPwd(!showPwd);
  }

    return (
        <section className="account py-80">
            <div className="container container-lg">
                <form action="#">
                    <div className="row gy-4">
                        
                        {/* Register Card Start */}
                        <div className="col-xl-4 pe-xl-5 mx-auto">
                            <div className="border border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-40">
                                <h6 className="text-xl mb-32">Register</h6>
                                <div className="mb-24 position-relative">
                                    <User 
                                        size={20} 
                                        className="position-absolute top-50 translate-middle-y ms-16"
                                    />
                                    <input
                                        type="text"
                                        className="common-input ps-40"  // padding start to leave space for icon
                                        id="username"
                                        placeholder="Enter Name"
                                        value={username} onChange={(e) => setUserName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-24 position-relative">
                                    <Phone 
                                        size={20} 
                                        className="position-absolute top-50 translate-middle-y ms-16"
                                    />
                                    <input
                                        type="text"
                                        className="common-input ps-40"  // padding start to leave space for icon
                                        id="phone"
                                        placeholder="Enter Phone"
                                        value={phone} onChange={(e) => setphone(e.target.value)}

                                    />
                                </div>
                                <div className="mb-24 position-relative">
                                    <EnvelopeSimple 
                                        size={20} 
                                        className="position-absolute top-50 translate-middle-y ms-16"
                                    />
                                    <input
                                        type="text"
                                        className="common-input ps-40"  // padding start to leave space for icon
                                        id="emailId"
                                        placeholder="Enter Email"
                                        value={emailId} onChange={(e) => setEmailId(e.target.value)}

                                    />
                                </div>
                                <div className="mb-24 position-relative">
                                    <LockSimple 
                                        size={20} 
                                        className="position-absolute top-50 translate-middle-y ms-16"
                                    />
                                    <input
                                        // type="password"
                                        type={showPwd ? "text" : "password"}
                                        className="common-input ps-40"
                                        id="password"
                                        placeholder="Enter Password"
                                        value={password} onChange={(e) => setPassword(e.target.value)}

                                    />
                                    {/* <span
                                        className="toggle-password position-absolute top-50 inset-inline-end-0 me-16 translate-middle-y cursor-pointer ph ph-eye-slash"
                                        id="#password"
                                        onClick={handleShowPassword}
                                    /> */}
                                     <span
                                        className={`toggle-password position-absolute top-50 inset-inline-end-0 me-16 translate-middle-y cursor-pointer ${
                                            showPwd ? 'ph ph-eye' : 'ph ph-eye-slash'
                                        }`}
                                        onClick={handleShowPassword}
                                        />

                                </div>
                                <div className="mt-48">
                                    <p className="text-error">{error}</p>
                                </div>
                                <div className="mt-48">
                                    <button className="btn btn-main py-18 px-40 w-100" onClick={handleRegister}>
                                        Register
                                    </button>
                                </div>
                                <div className="mt-24 text-center">
                                    Already have account 
                                    <Link
                                        to="/signin"
                                        className="text-danger-600 text-sm fw-semibold hover-text-decoration-underline"
                                    >&nbsp;SignIn
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Register Card End */}
                    </div>
                </form>

                {showToast && (
                    <div className="toast toast-top toast-center">
                        <div className="alert alert-success">
                            <span className="text-white">Registered successfully.</span>
                        </div>
                    </div>
                )}
            </div>
        </section>

    )
}

export default Registration