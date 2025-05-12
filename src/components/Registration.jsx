import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EnvelopeSimple, LockSimple, Phone, User } from '@phosphor-icons/react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { BASE_URL } from "../utils/constants";

const Registration = () => {
  const navigate = useNavigate();
  const [showPwd, setShowPwd] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(4, 'Name must be at least 4 characters')
      .required('Name is required'),
    phone: Yup.string().required('Phone is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .matches(/[a-z]/, 'Must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
        .matches(/[0-9]/, 'Must contain at least one number')
        .matches(/[^a-zA-Z0-9]/, 'Must contain at least one special character'),

  });

  const formik = useFormik({
    initialValues: {
      username: '',
      phone: '',
      email: '',
      password: '',
    },
    validationSchema,
    // onSubmit: async (values) => {
    //   try {
    //     const res = await axios.post(`${BASE_URL}/signup`, values, {
    //       withCredentials: true,
    //     });
    //     console.log("result is:", res);
    //     setShowToast(true);
    //     setTimeout(() => {
    //       setShowToast(false);
    //       navigate("/signin");
    //     }, 3000);
    //   } catch (err) {
    //     setError(err?.response?.data || "Something went wrong");
    //   }
    // },
    onSubmit: async (values, { resetForm }) => {
        try {
          const res = await axios.post(`${BASE_URL}/signup`, values, {
            withCredentials: true,
          });
          console.log("result is:", res);
          
          // Clear fields
          resetForm();
      
          // Show toast and redirect
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
            // navigate("/signin");
          }, 3000);
        } catch (err) {
          // setError(err?.response?.data || "Something went wrong");
          const msg = err?.response?.data || "Something went wrong";
          setError(msg);
          // Redirect to login if already registered
          if (msg.includes("already registered")) {
            setTimeout(() => {
              navigate("/signin");
            }, 4000);
          }
        }
      }
      
  });

  return (
    <section className="account py-80">
      <div className="container container-lg">
        <form onSubmit={formik.handleSubmit}>
          <div className="row gy-4">
            <div className="col-xl-4 mx-auto">
              <div className="border border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-40">
                <h6 className="text-xl mb-32">Register</h6>

                {/* Username */}
                <div className="mb-24 position-relative">
                  <User size={20} className="position-absolute top-50 translate-middle-y ms-16" />
                  <input
                    type="text"
                    name="username"
                    className="common-input ps-40"
                    placeholder="Enter Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                  />
                  {formik.touched.username && formik.errors.username && (
                    <p className="text-error-red">{formik.errors.username}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="mb-24 position-relative">
                  <Phone size={20} className="position-absolute top-50 translate-middle-y ms-16" />
                  <input
                    type="text"
                    name="phone"
                    className="common-input ps-40"
                    placeholder="Enter Phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="text-error-red">{formik.errors.phone}</p>
                  )}
                </div>

                {/* Email */}
                <div className="mb-24 position-relative">
                  <EnvelopeSimple size={20} className="position-absolute top-50 translate-middle-y ms-16" />
                  <input
                    type="text"
                    name="email"
                    className="common-input ps-40"
                    placeholder="Enter Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-error-red">{formik.errors.email}</p>
                  )}
                </div>

                {/* Password */}
                <div className="mb-24 position-relative">
                  <LockSimple size={20} className="position-absolute top-50 translate-middle-y ms-16" />
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
                <div className="mb-24 mt-30">
                  <button type="submit" className="btn btn-main py-18 px-40 w-100">
                    Register
                  </button>
                </div>

                {/* Link to Login */}
                <div className="mt-24 text-center">
                  Already have account
                  <Link
                    to="/signin"
                    className="text-danger-600 text-sm fw-semibold hover-text-decoration-underline"
                  >
                    &nbsp;SignIn
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* Toast */}
        {showToast && (
          <div className="toast mx-auto mt-20 show text-bg-success" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex justify-content-center align-items-center">
              <div className="toast-body">
                You have Registered successfully.
              </div>
              <button type="button" class="btn-close me-2 m-auto pe-20 text-white" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
          </div>
          // <div className="toast toast-top toast-center show">
          //   <div className="alert alert-success text-success m-0">
          //     <span className="">Registered successfully.</span>
          //   </div>
          // </div>
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
    }
  `}
</style>

    </section>
  );
};

export default Registration;
