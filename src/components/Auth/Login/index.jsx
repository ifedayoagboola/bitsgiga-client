import { Link, useNavigate, useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import InputGroup from "../../Helpers/InputGroup";
import PasswordInput from "../../Helpers/PasswordInput";
import Button from "../../Helpers/Button";
// import SocialLoginButton from "../../Helpers/SocialLoginButton";
import { useLoginMutation } from "../../../store/api";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/slices/authSlice";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function Login() {
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const result = await login({
        email: values.email.toLowerCase().trim(),
        password: values.password,
      }).unwrap();
      

      
      // Store user data and token in Redux
      dispatch(setUser({
        user: result.data,
        token: result.data.accessToken,
      }));

      // Show success toast
      toast.success('Login successful! Welcome back!');

      // Check if there's a return URL from the location state
      const returnUrl = location.state?.from || '/';
      const message = location.state?.message;

      // Show custom message if provided
      if (message) {
        toast.success(message);
      }

      // Redirect to return URL or home page after a short delay
      setTimeout(() => {
        navigate(returnUrl);
      }, 2000);
    } catch (err) {
      console.error('Login failed:', err);
      let errorMessage = 'Login failed. Please check your credentials and try again.';
      
      if (err.data?.message) {
        errorMessage = err.data.message;
      }
      
      // Show error toast
      toast.error(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

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
                    onSubmit={handleSubmit}
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
                            <div className="d-flex justify-content-between align-items-center mb-3">
                              <label className="custom-checkbox d-flex align-items-center mb-0">
                                <Field
                                  type="checkbox"
                                  name="rememberMe"
                                  className="form-check-input me-2"
                                />
                                Remember me
                              </label>
                              <Link
                                className="text-orange fs-16 fw-medium ms-2"
                                to="/forgot-password"
                              >
                                Forgot Password?
                              </Link>
                            </div>
                            <div className="form-login py-2">
                              <Button 
                                type="submit" 
                                variant="primary"
                                fullWidth
                                loading={isLoading}
                                disabled={isLoading}
                              >
                                Sign In
                              </Button>
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
                            {/* <div className="form-setlogin or-text">
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
      {/* /Main Wrapper */}
    </>
  );
}
