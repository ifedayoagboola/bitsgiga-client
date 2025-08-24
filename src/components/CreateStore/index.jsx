import { useRef, useState, useEffect } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import InputGroup from "../Helpers/InputGroup";
import Button from "../Helpers/Button";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";
import { Link } from "react-router-dom";
import { useCreateStoreMutation } from "../../store/api";
import { selectIsAuthenticated } from "../../store/slices/authSlice";

const CreateStoreSchema = Yup.object().shape({
  brand_name: Yup.string().required("Store name is required"),
  description: Yup.string().required("Description is required"),
  phone_number: Yup.string().required("Phone number is required"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  street: Yup.string().required("Street address is required"),
});

export default function CreateStore() {
  const [createStore, { isLoading }] = useCreateStoreMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [profileImg, setProfileImg] = useState(null);
 
  // Check authentication on component mount
  useEffect(() => {
    if (!isAuthenticated) {
      toast.error('Please log in to create a store');
      // Redirect to login with return URL
      navigate('/login', { 
        state: { 
          from: location.pathname,
          message: 'Please log in to create a store' 
        } 
      });
    }
  }, [isAuthenticated, navigate, location.pathname]);
  
  // profile img
  const profileImgInput = useRef(null);
  const browseProfileImg = () => {
    profileImgInput.current.click();
  };
  const profileImgChangHandler = (e) => {
    if (e.target.value !== "") {
      const imgReader = new FileReader();
      imgReader.onload = (event) => {
        setProfileImg(event.target.result);
      };
      imgReader.readAsDataURL(e.target.files[0]);
    }
  };
  

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Check authentication
      if (!isAuthenticated) {
        toast.error('Please log in to create a store');
        navigate('/login', { 
          state: { 
            from: location.pathname,
            message: 'Please log in to create a store' 
          } 
        });
        return;
      }
      
      // Check if required images are uploaded
      if (!profileImg) {
        toast.error('Please upload a store image');

        return;
      }

      const storeData = {
        brand_name: values.brand_name,
        description: values.description,
        phone_number: values.phone_number,
        state: values.state,
        city: values.city,
        street: values.street,
        img_url: profileImg,
      };

      await createStore(storeData).unwrap();
      
      toast.success('Store created successfully! Your application is under review.');
      
      // Redirect to home page after a short delay
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (err) {
      
      let errorMessage = 'Failed to create store. Please try again.';
      
      // Handle authentication errors
      if (err.data?.message === 'No token provided' || err.status === 401) {
        errorMessage = 'Authentication required. Please log in to create a store.';
        toast.error(errorMessage);
        navigate('/login', { 
          state: { 
            from: location.pathname,
            message: 'Please log in to create a store' 
          } 
        });
        return;
      }
      
      if (err.data?.message) {
        errorMessage = err.data.message;
      } else if (err.error) {
        errorMessage = err.error;
      }
      
      // Handle specific error cases
      if (errorMessage.includes('brand name already exists')) {
        toast.error('A store with this name already exists. Please choose a different store name.');
      } else if (errorMessage.includes('Internal server error')) {
        toast.error('Something went wrong. Please try again with a different store name.');
      } else {
        toast.error(errorMessage);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="create-store-wrapper w-full">
        <div className="title mb-10">
          <PageTitle
            title="Seller Application"
            breadcrumb={[
              { name: "home", path: "/" },
              { name: "create a store", path: "/create-store" },
            ]}
          />
        </div>
        <div className="content-wrapper w-full mb-10">
          <div className="container-x mx-auto">
            <div className="w-full bg-white sm:p-[30px] p-3">
              <div className="flex xl:flex-row flex-col-reverse xl:space-x-11">
                <div className="xl:w-[824px]">
                  <Formik
                    initialValues={{
                      brand_name: "",
                      description: "",
                      phone_number: "",
                      state: "",
                      city: "",
                      street: "",
                    }}
                    validationSchema={CreateStoreSchema}
                    onSubmit={handleSubmit}
                    validateOnChange={true}
                    validateOnBlur={true}
                  >
                    {({ values, handleChange, handleBlur}) => {
                      return (
                        <Form>
                          <div className="title w-full mb-4">
                            <h1 className="text-[22px] font-semibold text-qblack mb-1">
                              Store Information
                            </h1>
                            <p className="text-[15px] text-qgraytwo">
                              Fill the form below to create your store. We will review your application.
                            </p>
                          </div>
                        <div className="input-area">
                          <div className="mb-5">
                            <InputGroup
                              label="Store Name"
                              type="text"
                              name="brand_name"
                              placeholder="Enter store name"
                              value={values.brand_name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              icon={
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                  <polyline points="9,22 9,12 15,12 15,22"></polyline>
                                </svg>
                              }
                              required
                            />
                            <ErrorMessage name="brand_name" component="div" className="text-red-500 text-sm mt-1" />
                          </div>
                          
                          <div className="mb-5">
                            <InputGroup
                              label="Description"
                              type="text"
                              name="description"
                              placeholder="Enter store description"
                              value={values.description}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              icon={
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                  <polyline points="14,2 14,8 20,8"></polyline>
                                  <line x1="16" y1="13" x2="8" y2="13"></line>
                                  <line x1="16" y1="17" x2="8" y2="17"></line>
                                  <polyline points="10,9 9,9 8,9"></polyline>
                                </svg>
                              }
                              required
                            />
                            <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
                          </div>

                          <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                            <InputGroup
                              label="Phone Number"
                              type="tel"
                              name="phone_number"
                              placeholder="Enter phone number"
                              value={values.phone_number}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              icon={
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                              }
                              required
                            />
                            <ErrorMessage name="phone_number" component="div" className="text-red-500 text-sm mt-1" />
                          </div>

                          <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                            <InputGroup
                              label="State"
                              type="text"
                              name="state"
                              placeholder="Enter state"
                              value={values.state}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              icon={
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                  <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                              }
                              required
                            />
                            <ErrorMessage name="state" component="div" className="text-red-500 text-sm mt-1" />
                            
                            <InputGroup
                              label="City"
                              type="text"
                              name="city"
                              placeholder="Enter city"
                              value={values.city}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              icon={
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                  <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                              }
                              required
                            />
                            <ErrorMessage name="city" component="div" className="text-red-500 text-sm mt-1" />
                          </div>

                          <div className="mb-5">
                            <InputGroup
                              label="Street Address"
                              type="text"
                              name="street"
                              placeholder="Enter street address"
                              value={values.street}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              icon={
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                  <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                              }
                              required
                            />
                            <ErrorMessage name="street" component="div" className="text-red-500 text-sm mt-1" />
                          </div>

                          <div className="signin-area mb-3">
                            <div className="flex justify-center">
                              <Button
                                type="submit"
                                variant="primary"
                                size="large"
                                loading={isLoading}
                                disabled={isLoading}
                                className="w-[490px] h-[50px]"
                              >
                                Create Store
                              </Button>
                            </div>
                          </div>

                          <div className="signup-area flex justify-center">
                            <p className="text-sm text-qgraytwo font-normal">
                              Already have an Account?
                              <Link to="/login" className="ml-2 text-qblack">
                                Log In
                              </Link>
                            </p>
                          </div>
                        </div>
                      </Form>
                      );
                    }}
                  </Formik>
                </div>
                <div className="flex-1 mb-10 xl:mb-0">
                  <div className="update-profile w-full mb-9">
                    <h1 className="text-xl tracking-wide font-bold text-qblack flex items-center mb-2">
                      Store Image*
                      <span className="ml-1">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 0C4.47457 0 0 4.47791 0 10C0 15.5221 4.47791 20 10 20C15.5221 20 20 15.5221 20 10C19.9967 4.48126 15.5221 0.00669344 10 0ZM10 16.67C9.53815 16.67 9.16667 16.2985 9.16667 15.8367C9.16667 15.3748 9.53815 15.0033 10 15.0033C10.4618 15.0033 10.8333 15.3748 10.8333 15.8367C10.8333 16.2952 10.4618 16.67 10 16.67ZM11.6098 10.425C11.1078 10.7396 10.8132 11.2952 10.8333 11.8842V12.5033C10.8333 12.9652 10.4618 13.3367 10 13.3367C9.53815 13.3367 9.16667 12.9652 9.16667 12.5033V11.8842C9.14324 10.6861 9.76907 9.56827 10.8032 8.96586C11.4357 8.61781 11.7704 7.90161 11.6366 7.19545C11.5027 6.52276 10.9772 5.99732 10.3046 5.8668C9.40094 5.69946 8.5308 6.29853 8.36346 7.20214C8.34673 7.30254 8.33668 7.40295 8.33668 7.50335C8.33668 7.96519 7.9652 8.33668 7.50335 8.33668C7.0415 8.33668 6.67002 7.96519 6.67002 7.50335C6.67002 5.66265 8.16265 4.17001 10.0067 4.17001C11.8474 4.17001 13.34 5.66265 13.34 7.50669C13.3333 8.71821 12.674 9.83601 11.6098 10.425Z"
                            fill="#374557"
                            fillOpacity="0.6"
                          />
                        </svg>
                      </span>
                    </h1>
                    <p className="text-sm text-qgraytwo mb-5">
                      Store image of at least Size
                      <span className="ml-1 text-qblack">300x300</span>. Gifs
                      work too.
                      <span className="ml-1 text-qblack">Max 5mb</span>.
                    </p>
                    <div className="flex xl:justify-center justify-start">
                      <div className="relative">
                        <img
                          src={
                            profileImg ||
                            `${
                              import.meta.env.VITE_PUBLIC_URL || ''
                            }/assets/images/edit-profileimg.jpg`
                          }
                          alt=""
                          className="sm:w-[198px] sm:h-[198px] w-[199px] h-[199px] rounded-full overflow-hidden object-cover"
                        />
                        <input
                          ref={profileImgInput}
                          onChange={(e) => profileImgChangHandler(e)}
                          type="file"
                          className="hidden"
                        />
                        <div
                          onClick={browseProfileImg}
                          className="w-[32px] h-[32px] absolute bottom-7 sm:right-0 right-[105px]  hover:bg-[#F539F8] bg-[#F539F8] rounded-full cursor-pointer"
                        >
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.5147 11.5C17.7284 12.7137 18.9234 13.9087 20.1296 15.115C19.9798 15.2611 19.8187 15.4109 19.6651 15.5683C17.4699 17.7635 15.271 19.9587 13.0758 22.1539C12.9334 22.2962 12.7948 22.4386 12.6524 22.5735C12.6187 22.6034 12.5663 22.6296 12.5213 22.6296C11.3788 22.6334 10.2362 22.6297 9.09365 22.6334C9.01498 22.6334 9 22.6034 9 22.536C9 21.4009 9 20.2621 9.00375 19.1271C9.00375 19.0746 9.02997 19.0109 9.06368 18.9772C10.4123 17.6249 11.7609 16.2763 13.1095 14.9277C14.2295 13.8076 15.3459 12.6913 16.466 11.5712C16.4884 11.5487 16.4997 11.5187 16.5147 11.5Z"
                              fill="white"
                            />
                            <path
                              d="M20.9499 14.2904C19.7436 13.0842 18.5449 11.8854 17.3499 10.6904C17.5634 10.4694 17.7844 10.2446 18.0054 10.0199C18.2639 9.76139 18.5261 9.50291 18.7884 9.24443C19.118 8.91852 19.5713 8.91852 19.8972 9.24443C20.7251 10.0611 21.5492 10.8815 22.3771 11.6981C22.6993 12.0165 22.7105 12.4698 22.3996 12.792C21.9238 13.2865 21.4443 13.7772 20.9686 14.2717C20.9648 14.2792 20.9536 14.2867 20.9499 14.2904Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                 
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
