import { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PasswordInput from "../../Helpers/PasswordInput";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

export default function Signup() {
  const [checked, setValue] = useState(false);

  const rememberMe = () => {
    setValue(!checked);
  };

  return (
    <div className="main-wrapper mt-5">
        <div className="account-content">
          <div className="login-wrapper login-new">
                <div className="login-content user-login">
                  <div className="login-logo">
                    <Link to="/">
                      <img src="/assets/images/logo.png" alt="Bitshub" />
                    </Link>
                  </div>
                  <Formik
                    initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
                    validationSchema={SignupSchema}
                    onSubmit={(values) => {
                      // handle signup
                      // console.log(values);
                    }}
                  >
                    {({ values, handleChange, handleBlur }) => (
                      <Form>
                        <div className="card">
                          <div className="card-body p-5">
                            <div className="login-userheading">
                              <h3>Register</h3>
                              <h4>Create New Bitshub Account</h4>
                            </div>
                            <div className="mb-3">
                              <label className="form-label">
                                Name <span className="text-danger"> *</span>
                              </label>
                              <div className="input-group">
                                <Field
                                  type="text"
                                  name="name"
                                  value={values.name}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="form-control border-end-0"
                                />
                                <span className="input-group-text border-start-0">
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                  </svg>
                                </span>
                              </div>
                              <ErrorMessage name="name" component="div" className="text-danger mb-2" />
                            </div>
                            <div className="mb-3">
                              <label className="form-label">
                                Email <span className="text-danger"> *</span>
                              </label>
                              <div className="input-group">
                                <Field
                                  type="email"
                                  name="email"
                                  value={values.email}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="form-control border-end-0"
                                />
                                <span className="input-group-text border-start-0">
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                  </svg>
                                </span>
                              </div>
                              <ErrorMessage name="email" component="div" className="text-danger mb-2" />
                            </div>
                            <PasswordInput
                              label="Password"
                              name="password"
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              required
                            />
                            <ErrorMessage name="password" component="div" className="text-danger mb-2" />
                            <PasswordInput
                              label="Confirm Password"
                              name="confirmPassword"
                              value={values.confirmPassword}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              required
                            />
                            <ErrorMessage name="confirmPassword" component="div" className="text-danger mb-2" />
                            <div className="form-login authentication-check">
                              <div className="row">
                                <div className="col-sm-8">
                                  <div className="custom-control custom-checkbox justify-content-start">
                                    <div className="custom-control custom-checkbox">
                                      <label className="checkboxs ps-4 mb-0 pb-0 line-height-1">
                                        <input
                                          type="checkbox"
                                          checked={checked}
                                          onChange={rememberMe}
                                        />
                                        <span className="checkmarks" />
                                        I agree to the{" "}
                                        <Link to="#" className="text-primary">
                                          Terms &amp; Privacy
                                        </Link>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="form-login py-2">
                              <button type="submit" className="btn btn-login w-100">
                                Sign Up
                              </button>
                            </div>
                            <div className="signinform">
                              <h4>
                                Already have an account ?{" "}
                                <Link to="/login" className="hover-a">
                                  Sign In Instead
                                </Link>
                              </h4>
                            </div>
                            <div className="form-setlogin or-text">
                              <h4>OR</h4>
                            </div>
                            <div className="mt-2">
                              <div className="d-flex align-items-center justify-content-center flex-wrap">
                                <div className="text-center me-2 flex-fill">
                                  <Link
                                    to="#"
                                    className="br-10 p-2 btn btn-info d-flex align-items-center justify-content-center"
                                  >
                                    <img
                                      className="img-fluid m-1"
                                      src="/assets/images/facebook-logo.svg"
                                      alt="Facebook"
                                    />
                                  </Link>
                                </div>
                                <div className="text-center me-2 flex-fill">
                                  <Link
                                    to="#"
                                    className="btn btn-white br-10 p-2 border d-flex align-items-center justify-content-center"
                                  >
                                    <img
                                      className="img-fluid m-1"
                                      src="/assets/images/google-logo.svg"
                                      alt="Google"
                                    />
                                  </Link>
                                </div>
                                <div className="text-center flex-fill">
                                  <Link
                                    to="#"
                                    className="bg-dark br-10 p-2 btn btn-dark d-flex align-items-center justify-content-center"
                                  >
                                    <img
                                      className="img-fluid m-1"
                                      src="/assets/images/apple-logo.svg"
                                      alt="Apple"
                                    />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
                <div className="my-4 d-flex justify-content-center align-items-center copyright-text">
                  <p>Copyright © 2025 Bitshub</p>
            </div>
          </div>
        </div>
      </div>
  );
}
