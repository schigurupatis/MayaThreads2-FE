import React from 'react';
import { Link } from 'react-router-dom';
// Importing icons from Phosphor icons or you can use FontAwesome or anything else
import { EnvelopeSimple, LockSimple } from '@phosphor-icons/react';

const Login = () => {
    return (
        <section className="account py-80">
            <div className="container container-lg">
                <form action="#">
                    <div className="row gy-4">
                        {/* Login Card Start */}
                        <div className="col-xl-4 pe-xl-5 mx-auto">
                            <div className="border border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-40 h-100">
                                <h6 className="text-xl mb-32">LogIn</h6>
                                
                                {/* Email Input with Icon */}
                                <div className="mb-24 position-relative">
                                    <EnvelopeSimple 
                                        size={20} 
                                        className="position-absolute top-50 translate-middle-y ms-16"
                                    />
                                    <input
                                        type="text"
                                        className="common-input ps-40"  // padding start to leave space for icon
                                        id="username"
                                        placeholder="Enter Phone or Email"
                                    />
                                </div>

                                {/* Password Input with Icon */}
                                <div className="mb-24 position-relative">
                                    <LockSimple 
                                        size={20} 
                                        className="position-absolute top-50 translate-middle-y ms-16"
                                    />
                                    <input
                                        type="password"
                                        className="common-input ps-40"
                                        id="password"
                                        placeholder="Enter Password"
                                    />
                                    <span
                                        className="toggle-password position-absolute top-50 inset-inline-end-0 me-16 translate-middle-y cursor-pointer ph ph-eye-slash"
                                        id="#password"
                                    />
                                </div>

                                <div className="mb-24 mt-48">
                                    <button type="submit" className="btn btn-main py-18 px-40 w-100">
                                        LogIn
                                    </button>
                                </div>

                                <div className="mt-24 text-center">
                                    <Link
                                        to="#"
                                        className="text-danger-600 text-sm fw-semibold hover-text-decoration-underline mb-4"
                                    >
                                        Forgot your password?
                                    </Link>
                                    <p className='m-0'>
                                        Don't have account?
                                        <Link
                                            to="/signup"
                                            className="text-danger-600 text-sm fw-semibold hover-text-decoration-underline"
                                        >&nbsp;SignUp Now
                                        </Link>
                                    </p>
                                </div>

                            </div>
                        </div>
                        {/* Login Card End */}
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login;
