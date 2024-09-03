import { useState } from "react";
import { Link } from "react-router-dom";
import  useLogin  from "../../hooks/useLogin";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 mt-48  ">
        <h1 className="text-3xl font-semibold text-center text-gray-300 mb-3">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className=" ">
            <div>
              <label className="label p-2">
                <span className=" text-gray-400 label-text  text-base">Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="input input-bordered w-80 bg-gray-950"
                value={username}
                onChange={(e) => setusername(e.target.value)}
              />
            </div>

            <div>
              <label className="label">
                <span className=" text-gray-400 label-text  text-base">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"} // Toggle input type based on visibility state
                  placeholder="Enter your password"
                  className="input input-bordered w-full  bg-gray-950"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
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

            <Link
              to={"/signup"}
              className="text-sm py-2 hover:underline hover:text-blue-600 mt-2 inline-block"
            >
              {"Don't"} have an account?
            </Link>

            <div>
              <button
                className="btn btn-block btn-sm mt-2 max-w-xs bg-gray-950 border-0 "
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "login"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
