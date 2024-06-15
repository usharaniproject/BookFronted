import React, { useContext,useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider'
import googleLogo from '../assets/banner-books/google.jpg'

// import { AuthContext } from '../contexts/AuthProvider';
const Signup = () => {

    const {createUser,loginwithGoogle} =useContext(AuthContext);
     const [error,setError] =useState(null);

    const location= useLocation();
    const navigate=useNavigate();
    const from =location.from?.pathname || "/";

    const handleSignup= (event) =>{
        event.preventDefault();
        const form= event.target;
        const email = form.email.value;
        const password= form.password.value;

        createUser(email,password).then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("SignUp Successfully");
            navigate(from,{replace:true});
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
            // ..
          })
    }

    // signup Using Google Accounts
    const handleRegister = () =>{
     loginwithGoogle().then((result) =>{
        const user=result.user;
        navigate(from,{replace:true});
     })
    }
  return (  
<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold">Signup Form</h1>
				</div>
				<div className="divide-y divide-gray-200">
					<form onSubmit={handleSignup} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div className="relative">
							<input  id="email" name="email" type="text" className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							{/* <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label> */}
						</div>
						<div className="relative">
							<input id="password" name="password" type="password" className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							{/* <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label> */}
						</div>
                        <p>If you have an Account. Please <Link to="/login" className="text-blue-600 underline">Login</Link> Here</p>
						<div className="relative">
							<button className="bg-blue-500 text-white  rounded-md px-6 py-2">Sign Up</button>
						</div>
					</form>
				</div>
                <hr/>
                <div className='flex w-full items-center flex-col mt-5 gap-3'>
                    <button onClick={handleRegister} className='block'><img src={googleLogo} alt="" className='w-12 h-7 inline-block bg-white rounded'/>Login with Google</button>
                </div>
			</div>
		</div>
	</div>
</div>
  )
}

export default Signup
