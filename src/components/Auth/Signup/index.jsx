import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import PasswordInput from "../../Helpers/PasswordInput";
import InputGroup from "../../Helpers/InputGroup";
import Button from "../../Helpers/Button";
import { useRegisterMutation } from "../../../store/api";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/slices/authSlice";

const SignupSchema = Yup.object().shape({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(8, "Password must be at least 8 characters").max(25, "Password must be at most 25 characters").required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  phone_number: Yup.string().optional(),
});

export default function Signup() {
  const [checked, setValue] = useState(false);
  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const rememberMe = () => {
    setValue(!checked);
  };

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    if (!checked) {
      setFieldError('terms', 'You must agree to the Terms & Privacy');
      setSubmitting(false);
      return;
    }

    try {
      // Transform form data to match API format
      const userData = {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email.toLowerCase().trim(),
        password: values.password,
        phone_number: values.phone_number || undefined,
      };
      const result = await register(userData).unwrap();
      
      // Store user data and token in Redux
      dispatch(setUser({
        user: result.data,
        token: result.data.accessToken,
      }));

      // Show success toast
      toast.success('Account created successfully! Welcome to Bitshub!');

      // Redirect to home page after a short delay
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (err) {
      console.error('Registration failed:', err);
      // Handle specific error cases
      let errorMessage = 'Registration failed. Please try again.';
      
      if (err.data?.message) {
        if (err.data.message.includes('already exists')) {
          setFieldError('email', 'An account with this email already exists');
          errorMessage = 'An account with this email already exists';
        } else {
          setFieldError('general', err.data.message);
          errorMessage = err.data.message;
        }
      }
      
      // Show error toast
      toast.error(errorMessage);
    } finally {
      setSubmitting(false);
    }
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
                    initialValues={{ 
                      first_name: "", 
                      last_name: "", 
                      email: "", 
                      password: "", 
                      confirmPassword: "",
                      phone_number: ""
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ values, handleChange, handleBlur, isSubmitting, errors, touched }) => (
                      <Form>
                        <div className="card">
                          <div className="card-body p-5">
                            <div className="login-userheading">
                              <h3>Register</h3>
                              <h4>Create New Bitshub Account</h4>
                            </div>
                            
                            {/* General error message */}
                            {errors.general && (
                              <div className="alert alert-danger" role="alert">
                                {errors.general}
                              </div>
                            )}

                            <InputGroup
                              label="First Name"
                              type="text"
                              name="first_name"
                              value={values.first_name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              icon={
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                  <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                              }
                              required
                              className={errors.first_name && touched.first_name ? 'is-invalid' : ''}
                            />
                            <ErrorMessage name="first_name" component="div" className="text-danger mb-2" />

                            <InputGroup
                              label="Last Name"
                              type="text"
                              name="last_name"
                              value={values.last_name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              icon={
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                  <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                              }
                              required
                              className={errors.last_name && touched.last_name ? 'is-invalid' : ''}
                            />
                            <ErrorMessage name="last_name" component="div" className="text-danger mb-2" />

                            <InputGroup
                              label="Email"
                              type="email"
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
                              className={errors.email && touched.email ? 'is-invalid' : ''}
                            />
                            <ErrorMessage name="email" component="div" className="text-danger mb-2" />

                            {/* <div className="mb-3">
                              <label className="form-label">
                                Phone Number
                              </label>
                              <div className="input-group">
                                <Field
                                  type="tel"
                                  name="phone_number"
                                  value={values.phone_number}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="form-control border-end-0"
                                  placeholder="Optional"
                                />
                                <span className="input-group-text border-start-0">
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                  </svg>
                                </span>
                              </div>
                              <ErrorMessage name="phone_number" component="div" className="text-danger mb-2" />
                            </div> */}

                            <PasswordInput
                              label="Password"
                              name="password"
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              required
                              className={errors.password && touched.password ? 'is-invalid' : ''}
                            />
                            <ErrorMessage name="password" component="div" className="text-danger mb-2" />
                            
                            <PasswordInput
                              label="Confirm Password"
                              name="confirmPassword"
                              value={values.confirmPassword}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              required
                              className={errors.confirmPassword && touched.confirmPassword ? 'is-invalid' : ''}
                            />
                            <ErrorMessage name="confirmPassword" component="div" className="text-danger mb-2" />

                            {/* Aligned Terms & Privacy checkbox */}
                            <div className="d-flex align-items-center mb-3">
                              <label className="custom-checkbox d-flex align-items-center mb-0">
                                <input
                                  type="checkbox"
                                  checked={checked}
                                  onChange={rememberMe}
                                  className="form-check-input me-2"
                                />
                                I agree to the&nbsp;<Link to="#" className="text-primary">Terms &amp; Privacy</Link>
                              </label>
                            </div>
                            {errors.terms && (
                              <div className="text-danger mt-1">{errors.terms}</div>
                            )}
                            
                            <div className="form-login py-2">
                              <Button 
                                type="submit" 
                                variant="primary"
                                fullWidth
                                loading={isSubmitting || isLoading}
                                disabled={isSubmitting || isLoading}
                              >
                                Sign Up
                              </Button>
                            </div>
                            
                            <div className="signinform">
                              <h4>
                                Already have an account ?{" "}
                                <Link to="/login" className="hover-a">
                                  Sign In Instead
                                </Link>
                              </h4>
                            </div>
                            
                            {/* <div className="form-setlogin or-text">
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
                            </div> */}
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
