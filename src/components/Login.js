import React from 'react';
import Header from './Header';
import { BG_URL } from '../utils/Constants';
import { useState } from 'react';

const Login = () => {

  const [issignin,setissignin] = useState(true);

  const toggleform=()=>{
    setissignin(!issignin)
  }
  
    return (
        <div>
          <Header />
          <div className='absolute inset-0'>
            <img  src={BG_URL} alt="logo" className='w-full h-full'  />
          </div>
          <form className='absolute bg-black w-1/2 p-12 m-20 mx-auto right-0 left-0 bg-opacity-80 text-white rounded-lg' >
            <h1 className='text-white font-bold py-4 text-3xl' >{issignin ? "SignIn" : "SignUp"}</h1>
            {!issignin &&(
              <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded-lg'></input>
            )}
             <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 rounded-lg'>
             </input>
             <input type='text' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-lg'>
             </input>
             <button className='p-4 my-6 bg-red-700 w-full rounded-lg '>{issignin ? "SignIn" : "SignUp"}</button>
             <p className='p-4 my-4 text-white cursor-pointer' onClick={toggleform} >{issignin ? "New to Netflix ? SignUp now" : "Already a Exsiting User ? Please signIn "}</p>
             <p className='p-4 my-4 text-gray-500'>Sign in is protected by Google reCAPTCHA to ensure you’re not a bot.CDATA<b>Learn more.</b></p>
          </form>
        </div>
    )  
};

export default Login;
