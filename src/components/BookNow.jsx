import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EnvelopeSimple, LockSimple, Phone, User, FileText } from '@phosphor-icons/react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { BASE_URL } from "../utils/constants";
import { File } from '@phosphor-icons/react/dist/ssr';

const BookNow = () => {
  const navigate = useNavigate();
  const [showPwd, setShowPwd] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");

  const validationSchema = Yup.object({
    fullname: Yup.string()
      .min(4, 'Full Name must be at least 4 characters')
      .required('Full Name is required'),
    phone: Yup.string().required('Phone is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    subject: Yup.string()
      .min(4, 'Subject must be at least 4 characters')
      .required('Subject is required'),
    message: Yup.string()
      .min(4, 'Message must be at least 4 characters')
      .required('Message is required'),

  });

  const formik = useFormik({
    initialValues: {
      fullname: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
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
          const res = await axios.post(`${BASE_URL}/booknow`, values, {
            withCredentials: true,
          });
          console.log("result is:", res);
          
          // Clear fields
          resetForm();
      
          // Show toast and redirect
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
            navigate("/");
          }, 3000);
        } catch (err) {
          setError(err?.response?.data || "Something went wrong");
        }
      }
      
  });

  return (
    <section className="account py-80">
      <div className="container container-lg">
        <form onSubmit={formik.handleSubmit}>
          <div className="row gy-4">
            <div className="col-xl-7 pe-xl-6 mx-auto">
              <div className="border border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-40">
                <h6 className="text-xl mb-32">Make Custom Request</h6>
                <div className="row gy-4">
                <div className="col-sm-6 col-xs-6">
                {/* Username */}
                <div className="mb-7 position-relative">
                  <User size={20} className="position-absolute top-50 translate-middle-y ms-16" />
                  <input
                    type="text"
                    name="fullname"
                    className="common-input ps-40"
                    placeholder="Full Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullname}
                  />
                  {formik.touched.fullname && formik.errors.fullname && (
                    <p className="text-error-red">{formik.errors.fullname}</p>
                  )}
                </div>
                </div>

                <div className="col-sm-6 col-xs-6">
                {/* Phone */}
                <div className="mb-7 position-relative">
                  <Phone size={20} className="position-absolute top-50 translate-middle-y ms-16" />
                  <input
                    type="text"
                    name="phone"
                    className="common-input ps-40"
                    placeholder="Phone Number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="text-error-red">{formik.errors.phone}</p>
                  )}
                </div>
                </div>

                <div className="col-sm-6 col-xs-6">
                {/* Email */}
                <div className="mb-7 position-relative">
                  <EnvelopeSimple size={20} className="position-absolute top-50 translate-middle-y ms-16" />
                  <input
                    type="text"
                    name="email"
                    className="common-input ps-40"
                    placeholder="Email address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-error-red">{formik.errors.email}</p>
                  )}
                </div>
                </div>

                <div className="col-sm-6 col-xs-6">
                {/* Subject */}
                <div className="mb-7 position-relative">
                  <FileText size={20} className="position-absolute top-50 translate-middle-y ms-16" />
                  <input
                    type="text"
                    name="subject"
                    className="common-input ps-40"
                    placeholder="Subject"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.subject}
                  />
                  {formik.touched.subject && formik.errors.subject && (
                    <p className="text-error-red">{formik.errors.subject}</p>
                  )}
                </div>
                </div>

                <div className="col-sm-12">
                {/* Message */}
                <div className="mb-7 position-relative">
                  <textarea
                    name="message"
                    className="common-input px-16"
                    id="message"
                    placeholder="Type your message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <p className="text-error-red">{formik.errors.message}</p>
                  )}
                </div>
                </div>

                {/* Error Message */}
                {error && <div className="mt-48 text-error-red">{error}</div>}

                {/* Submit */}
                {/* <div className="mt-48">
                  <button type="submit" className="btn btn-main py-18 px-40 w-100">
                    Get A Quote
                  </button>
                </div> */}
                <div className="col-sm-12 mt-32">
                    <button
                        type="submit"
                        className="btn btn-main py-18 px-32 rounded-8"
                    >
                        Get a Quote
                    </button>
                </div>

                {/* Link to Login */}
                {/* <div className="mt-24 text-center">
                  SignUp for our Latest Offers
                  <Link
                    to="/signup"
                    className="text-danger-600 text-sm fw-semibold hover-text-decoration-underline"
                  >
                    &nbsp;SignUp
                  </Link>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* Toast */}
        {showToast && (
          <div className="toast toast-top toast-center">
            <div className="alert alert-success">
              <span className="text-white">Your Enquiry sent successfully.</span>
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
    }
  `}
</style>

    </section>
  );
};

export default BookNow;
