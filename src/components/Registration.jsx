import React from 'react'
import { Link } from 'react-router-dom'
// Importing icons from Phosphor icons or you can use FontAwesome or anything else
import { EnvelopeSimple, LockSimple, UserCircle } from '@phosphor-icons/react';

const Registration = () => {
    return (
        <section className="account py-80">
            <div className="container container-lg">
                <form action="#">
                    <div className="row gy-4">
                        
                        {/* Register Card Start */}
                        <div className="col-xl-4 pe-xl-5 mx-auto">
                            <div className="border border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-40">
                                <h6 className="text-xl mb-32">Register</h6>
                                {/* <div className="mb-24">
                                    <label
                                        htmlFor="usernameTwo"
                                        className="text-neutral-900 text-lg mb-8 fw-medium"
                                    >
                                        Username <span className="text-danger">*</span>{" "}
                                    </label>
                                    <input
                                        type="text"
                                        className="common-input"
                                        id="usernameTwo"
                                        placeholder="Write a username"
                                    />
                                </div> */}
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
                                <div className="mb-24 position-relative">
                                    <LockSimple 
                                        size={20} 
                                        className="position-absolute top-50 translate-middle-y ms-16"
                                    />
                                    <input
                                        type="password"
                                        className="common-input ps-40"
                                        id="password2"
                                        placeholder="Confirm Password"
                                    />
                                    <span
                                        className="toggle-password position-absolute top-50 inset-inline-end-0 me-16 translate-middle-y cursor-pointer ph ph-eye-slash"
                                        id="#password2"
                                    />
                                </div>
                                <div className="mt-48">
                                    <button type="submit" className="btn btn-main py-18 px-40 w-100">
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
            </div>
        </section>

    )
}

export default Registration