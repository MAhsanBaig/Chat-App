const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 mt-48  ">
        <h1 className="text-3xl font-semibold text-center text-gray-300 mb-3">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form>
          <div className=" ">
            <div>
              <label className="label p-2">
                <span className=" text-gray-400 label-text  text-base">Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="input input-bordered w-80 bg-gray-950"
                // value={username}
                // onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label className="label">
                <span className=" text-gray-400 label-text  text-base">Password</span>
              </label>
              <input
                type="text"
                placeholder="Enter your password"
                className="input input-bordered w-full  bg-gray-950"
                // value={username}
                // onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <a to='/signup' className='text-sm  py-2 hover:underline hover:text-blue-600 mt-2 inline-block '>
                {"Don't"} have an account?
                </a>

            <div>
              <button className="btn btn-block btn-sm mt-2 max-w-xs bg-gray-950 border-0">
                <span className="   text-gray-400 text-base "> Login</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
