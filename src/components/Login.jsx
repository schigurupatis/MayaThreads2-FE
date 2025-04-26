import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <section className="account py-80">
            <div className="container container-lg">
                <form action="#">
                    <div className="row gy-4">
                        {/* Login Card Start */}
                        <div className="col-xl-4 pe-xl-5 mx-auto">
                            <div className="border border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-40 h-100">
                                <h6 className="text-xl mb-32">Login</h6>
                                <div className="mb-24">
                                    <label
                                        htmlFor="username"
                                        className="text-neutral-900 text-lg mb-8 fw-medium"
                                    >
                                        Phone or Email <span className="text-danger">*</span>{" "}
                                    </label>
                                    <input
                                        type="text"
                                        className="common-input"
                                        id="username"
                                        placeholder="Phone or Email"
                                    />
                                </div>
                                <div className="mb-24">
                                    <label
                                        htmlFor="password"
                                        className="text-neutral-900 text-lg mb-8 fw-medium"
                                    >
                                        Password
                                    </label>
                                    <div className="position-relative">
                                        <input
                                            type="password"
                                            className="common-input"
                                            id="password"
                                            placeholder="Enter Password"
                                            defaultValue="password"
                                        />
                                        <span
                                            className="toggle-password position-absolute top-50 inset-inline-end-0 me-16 translate-middle-y cursor-pointer ph ph-eye-slash"
                                            id="#password"
                                        />
                                    </div>
                                </div>
                                <div className="mb-24 mt-48">
                                    <div className="flex-align gap-48 flex-wrap">
                                        <button type="submit" className="btn btn-main py-18 px-40 w-100">
                                            Log in
                                        </button>
                                        {/* <div className="form-check common-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="remember"
                                            />
                                            <label
                                                className="form-check-label flex-grow-1"
                                                htmlFor="remember"
                                            >
                                                Remember me
                                            </label>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="mt-24 text-center">
                                    <Link
                                        to="#"
                                        className="text-danger-600 text-sm fw-semibold hover-text-decoration-underline"
                                    >
                                        Forgot your password?
                                    </Link>
                                    <p className='m-0'>Dont' have account 
                                    <Link
                                        to="/signup"
                                        className="text-danger-600 text-sm fw-semibold hover-text-decoration-underline"
                                    >&nbsp;SignUp Now
                                    </Link></p>
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

export default Login