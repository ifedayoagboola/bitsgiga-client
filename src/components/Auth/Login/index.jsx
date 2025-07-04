import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputGroup from "../../Helpers/InputGroup";
import PasswordInput from "../../Helpers/PasswordInput";
import SocialLoginButton from "../../Helpers/SocialLoginButton";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function Login() {
  return (
    <>
      {/* Main Wrapper */}
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
                    initialValues={{ email: "", password: "", rememberMe: false }}
                    validationSchema={LoginSchema}
                    onSubmit={(values) => {
                      // handle login
                      console.log(values);
                    }}
                  >
                {({ values, handleChange, handleBlur }) => (
                      <Form>
                        <div className="card">
                          <div className="card-body p-5">
                            <div className="login-userheading">
                              <h3>Sign In</h3>
                              <h4>
                                Access the Bitshub panel using your email and
                                password.
                              </h4>
                            </div>
                            <InputGroup
                              label="Email"
                              type="text"
                              name="email"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              icon={
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                  <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                              }
                              required
                            />
                            <ErrorMessage name="email" component="div" className="text-danger mb-2" />
                            <PasswordInput
                              label="Password"
                              name="password"
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              required
                            />
                            <ErrorMessage name="password" component="div" className="text-danger mb-2" />
                            <div className="form-login authentication-check">
                              <div className="row">
                                <div className="col-12 d-flex align-items-center justify-content-between">
                                  <div className="custom-control custom-checkbox">
                                    <label className="checkboxs ps-4 mb-0 pb-0 line-height-1 fs-16 text-gray-6">
                                      <Field
                                        type="checkbox"
                                        className="form-control"
                                        name="rememberMe"
                                      />
                                      <span className="checkmarks" />
                                      Remember me
                                    </label>
                                  </div>
                                  <div className="text-end">
                                    <Link
                                      className="text-orange fs-16 fw-medium"
                                      to="/forgot-password"
                                    >
                                      Forgot Password?
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="form-login">
                              <button type="submit" className="btn btn-login w-100">
                                Sign In
                              </button>
                            </div>
                            <div className="signinform">
                              <h4>
                                New on our platform?
                                <Link to="/signup" className="hover-a">
                                  {" "}
                                  Create an account
                                </Link>
                              </h4>
                            </div>
                            <div className="form-setlogin or-text">
                              <h4>OR</h4>
                            </div>
                            <div className="mt-2">
                              <div className="d-flex align-items-center justify-content-center flex-wrap">
                                <SocialLoginButton
                                  provider="facebook"
                                  iconSrc="/assets/images/facebook-logo.svg"
                                  altText="Facebook"
                                />
                                <SocialLoginButton
                                  provider="google"
                                  iconSrc="/assets/images/google-logo.svg"
                                  altText="Google"
                                />
                                <SocialLoginButton
                                  provider="apple"
                                  iconSrc="/assets/images/apple-logo.svg"
                                  altText="Apple"
                                />
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
      {/* /Main Wrapper */}
    </>
  );
}
