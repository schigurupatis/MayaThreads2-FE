import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EnvelopeSimple, LockSimple } from '@phosphor-icons/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [loading, setLoading] = useState(false);
  // const [errorMsg, setErrorMsg] = useState("");

  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  const validationSchema = Yup.object({
    emailOrPhone: Yup.string()
      .required('Email or Phone is required')
      .test(
        'is-valid-email-or-phone',
        'Enter a valid email or 10-digit phone number',
        value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || /^\d{10}$/.test(value)
      ),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      emailOrPhone: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await axios.post(`${BASE_URL}/login`, {
          emailOrPhone: values.emailOrPhone,
          password: values.password,
        }, {
          withCredentials: true,
        });

        console.log("Login success:", res.data);
        dispatch(addUser(res.data));
        //dispatch(addUser(res.data.user)); // Not res.data
        resetForm();
        setShowToast(true);
        navigate("/");

        setTimeout(() => {
          setShowToast(false);
          navigate("/");
        }, 3000);
      } catch (err) {
        setError(err?.response?.data || "Login failed. Please check your credentials.");
      }
    }
  });

  return (
    <section className="account py-80">
      <div className="container container-lg">
        <form onSubmit={formik.handleSubmit}>
          <div className="row gy-4">
            <div className="col-xl-4 pe-xl-5 mx-auto">
              <div className="border border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-40 h-100">
                <h6 className="text-xl mb-32">LogIn</h6>

                {/* Email or Phone Input */}
                <div className="mb-24 position-relative">
                  <EnvelopeSimple
                    size={20}
                    className="position-absolute top-50 translate-middle-y ms-16"
                  />
                  <input
                    type="text"
                    name="emailOrPhone"
                    className="common-input ps-40"
                    placeholder="Enter Phone or Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.emailOrPhone}
                  />
                  {formik.touched.emailOrPhone && formik.errors.emailOrPhone && (
                    <p className="text-error-red">{formik.errors.emailOrPhone}</p>
                  )}
                </div>

                {/* Password */}
                <div className="mb-24 position-relative">
                  <LockSimple
                    size={20}
                    className="position-absolute top-50 translate-middle-y ms-16"
                  />
                  <input
                    type={showPwd ? "text" : "password"}
                    name="password"
                    className="common-input ps-40"
                    placeholder="Enter Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  <span
                    className={`toggle-password position-absolute top-50 inset-inline-end-0 me-16 translate-middle-y cursor-pointer ${
                      showPwd ? 'ph ph-eye' : 'ph ph-eye-slash'
                    }`}
                    onClick={() => setShowPwd(!showPwd)}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <p className="text-error-red">{formik.errors.password}</p>
                  )}
                </div>

                {/* Error */}
                <div className='mb-24 position-relative text-center'>
                {error && <p className="text-danger m-0">{error}</p>}
                </div>

                {/* Submit */}
                <div className="mb-24 mt-48">
                  <button type="submit" className="btn btn-main py-18 px-40 w-100">
                    LogIn
                  </button>
                </div>

                <div className='d-flex justify-content-between align-items-center mb-24 position-relative'>
                  <p className="m-0">
                    Forgot Password?
                  <Link
                      to="/signup"
                      className="text-danger-600 text-sm fw-semibold hover-text-decoration-underline"
                    >
                      &nbsp;ReSet
                    </Link>
                  </p>
                  <p className="m-0">
                    New User
                    <Link
                      to="/signup"
                      className="text-danger-600 text-sm fw-semibold hover-text-decoration-underline"
                    >
                      &nbsp;SignUp
                    </Link>
                    </p>
                  </div>


                {/* Link to Signup */}
                {/* <div className="mt-24 text-center">
                  <p className="m-0">
                    Forgot Your Password?
                    <Link
                      to="/signup"
                      className="text-danger-600 text-sm fw-semibold hover-text-decoration-underline"
                    >
                      &nbsp;ReSet Now
                    </Link>
                  </p>
                </div>
                <div className="mt-24 text-center">
                  <p className="m-0">
                    Don't have an account?
                    <Link
                      to="/signup"
                      className="text-danger-600 text-sm fw-semibold hover-text-decoration-underline"
                    >
                      &nbsp;SignUp Now
                    </Link>
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </form>

        {/* Toast */}
        {showToast && (
          // <div className="toast toast-top toast-center">
          //   <div className="alert alert-success">
          //     <span className="text-white">Logged in successfully.</span>
          //   </div>
          // </div>
          <div className="toast mx-auto mt-20 show text-bg-success" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex justify-content-center align-items-center">
              <div className="toast-body">
                You have LoggedIn successfully.
              </div>
              <button type="button" class="btn-close me-2 m-auto pe-20 text-white" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
          </div>
        )}
      </div>

      <style>
        {`
          .text-error-red {
            color: red;
            font-size: 0.875rem;
            margin-top: 4px;
            position: absolute;
            bottom: -20px;
          }
        `}
      </style>
    </section>
  );
};

export default Login;
