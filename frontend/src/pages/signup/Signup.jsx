import React from 'react'
import Gendercheckbox from './Gendercheckbox'

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 mt-32  ">
        <h1 className="text-3xl font-semibold text-center text-gray-300 mb-3">
          Signup
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form>
         
         <div>
              <label className="label p-2">
                <span className=" text-gray-400 label-text  text-base">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Fullname"
                className="input input-bordered w-80 bg-gray-950"
                // value={username}
                // onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label className="label p-2">
                <span className=" text-gray-400 label-text  text-base">Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter username"
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
                placeholder="Enter password"
                className="input input-bordered w-full  bg-gray-950"
                // value={username}
                // onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label className="label">
                <span className=" text-gray-400 label-text  text-base ">Confirm Password</span>
              </label>
              <input
                type="text"
                placeholder="Enter confirmPassword"
                className="input input-bordered w-full  bg-gray-950  mb-2"
                // value={username}
                // onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <Gendercheckbox/>
            <a to='/signup' className='text-sm  py-2 hover:underline hover:text-blue-600 mt-2 inline-block  text-gray-400'>
                  Already have an account?
                </a>

            <div>
              <button className="btn btn-block btn-sm mt-2 max-w-xs bg-gray-950 border-0">
                <span className="   text-gray-400 text-base "> Signup</span>
              </button>
            </div>
          
        </form>
      </div>
    </div>
  )
}

export default Signup