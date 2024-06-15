import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const {logout}= useContext(AuthContext);

    const location= useLocation();
    const navigate=useNavigate();
    const from =location.from?.pathname || "/"; 

    
    const handleLogout = () =>{
        logout().then(() => {
           alert("Logout Successfully");
           navigate(from,{replace:true});
          }).catch((error) => {
            // An error happened.
          });
    } 

  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
     
      <button onClick={handleLogout} className='bg-blue-700 h-10 px-8 text-white rounded'>Logout</button>
    </div>
  )
}

export default Logout
