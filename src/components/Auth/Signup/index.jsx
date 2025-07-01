import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [checked, setValue] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const rememberMe = () => {
    setValue(!checked);
  };

  const togglePasswordVisibility = (field) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  return (
    <div className="main-wrapper">
        <div className="account-content">
          <div className="login-wrapper login-new">
            <div className="row w-100">
              <div className="col-lg-6 mx-auto">
                <div className="login-content user-login">
                  <div className="login-logo">
                    <img src="/assets/images/logo.png" alt="Bitshub" />
                  </div>
                  <form>
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
                            <input
                              type="text"
                              defaultValue=""
                              className="form-control border-end-0"
                            />
                            <span className="input-group-text border-start-0">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                              </svg>
                            </span>
                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label">
                            Email <span className="text-danger"> *</span>
                          </label>
                          <div className="input-group">
                            <input
                              type="email"
                              defaultValue=""
                              className="form-control border-end-0"
                            />
                            <span className="input-group-text border-start-0">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                              </svg>
                            </span>
                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label">
                            Password <span className="text-danger"> *</span>
                          </label>
                          <div className="pass-group">
                            <input
                              type={passwordVisibility.password ? "text" : "password"}
                              className="pass-input form-control"
                            />
                            <span
                              className="toggle-password"
                              onClick={() => togglePasswordVisibility("password")}
                            >
                              {passwordVisibility.password ? (
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                  <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                              ) : (
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                  <line x1="1" y1="1" x2="23" y2="23"></line>
                                </svg>
                              )}
                            </span>
                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label">
                            Confirm Password <span className="text-danger"> *</span>
                          </label>
                          <div className="pass-group">
                            <input
                              type={passwordVisibility.confirmPassword ? "text" : "password"}
                              className="pass-input form-control"
                            />
                            <span
                              className="toggle-password"
                              onClick={() => togglePasswordVisibility("confirmPassword")}
                            >
                              {passwordVisibility.confirmPassword ? (
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                  <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                              ) : (
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                  <line x1="1" y1="1" x2="23" y2="23"></line>
                                </svg>
                              )}
                            </span>
                          </div>
                        </div>

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
                  </form>
                </div>
                <div className="my-4 d-flex justify-content-center align-items-center copyright-text">
                  <p>Copyright © 2025 Bitshub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
