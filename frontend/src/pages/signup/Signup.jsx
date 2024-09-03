import React, { useState } from 'react';
import Gendercheckbox from './Gendercheckbox';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

const Signup = () => {
  const [inputs, setinputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle confirm password visibility

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setinputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  // Functions to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 mt-20  ">
        <h1 className="text-3xl font-semibold text-center text-gray-300 mb-3">
          Signup
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-gray-400 label-text text-base">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Fullname"
              className="input input-bordered w-80 bg-gray-950"
              value={inputs.fullName}
              onChange={(e) => setinputs({ ...inputs, fullName: e.target.value })}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-gray-400 label-text text-base">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered w-80 bg-gray-950"
              value={inputs.username}
              onChange={(e) => setinputs({ ...inputs, username: e.target.value })}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-gray-400 label-text text-base">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"} // Toggle input type based on visibility state
                placeholder="Enter password"
                className="input input-bordered w-full bg-gray-950"
                value={inputs.password}
                onChange={(e) => setinputs({ ...inputs, password: e.target.value })}
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-400" /> // Show slash eye icon if password is visible
                ) : (
                  <FaEye className="text-gray-400" /> // Show eye icon if password is hidden
                )}
              </span>
            </div>
          </div>

          <div>
            <label className="label">
              <span className="text-gray-400 label-text text-base">Confirm Password</span>
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"} // Toggle input type based on visibility state
                placeholder="Enter confirmPassword"
                className="input input-bordered w-full bg-gray-950 mb-2"
                value={inputs.confirmPassword}
                onChange={(e) => setinputs({ ...inputs, confirmPassword: e.target.value })}
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? (
                  <FaEyeSlash className="text-gray-400" /> // Show slash eye icon if confirm password is visible
                ) : (
                  <FaEye className="text-gray-400" /> // Show eye icon if confirm password is hidden
                )}
              </span>
            </div>
          </div>

          <Gendercheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
          <Link to={'/login'} className='text-sm py-2 hover:underline hover:text-blue-600 mt-2 inline-block text-gray-400'>
            Already have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2 max-w-xs bg-gray-950 border-0" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : <span className="text-gray-400 text-base">Signup</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
