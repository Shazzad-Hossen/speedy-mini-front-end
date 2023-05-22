import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import github from '../assets/images/icon/github.png';
import google from '../assets/images/icon/google.png';
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const SignIn = () => {
    const {signInUser, googleSignin, githubSignin, resetPassword}=useContext(AuthContext);
    const [errmsg,setErrmsg]=useState(' ');
    const [rpEmail,setRpemail]=useState('');
    const location=useLocation();
    const navigate = useNavigate();
    const from=location.state?.from?.pathname || '/';


    const googleHandler=()=>{
       googleSignin().
       then((result) => {
           navigate(from,{replace:true});
           
         }).catch((error) => {
           setErrmsg(error.message.slice(22,-2));
           
         });
       
    }
    const githubHandler=()=>{
       githubSignin().
       then((result) => {
           navigate(from,{replace:true});
           
       }).catch((error) => {
         setErrmsg(error.message.slice(22,-2));
         
       });

    }
    const handleResetpass=(event)=>{
       setErrmsg(' ');
      
       if(rpEmail==='') setErrmsg("Email can't be empty");

       resetPassword(rpEmail).
       then(() => {
           toast.success("Password reset email send.");
           
         })
         .catch((error) => {
           setErrmsg(error.message.slice(22,-2));
         });
       
    }

   const handleSignin=(event)=>{
       event.preventDefault();
       setErrmsg(' ');
       const form= event.target;
       const email= form.email.value;
       const pass=form.pass.value;
       if(email==='') setErrmsg("Email can't be empty");
       else if(pass==='') setErrmsg("Password can't be empty");
       else if(pass.length<6) setErrmsg("Password must be or more than 6 charecter");
       else {
           setErrmsg(' ');
           signInUser(email,pass).
       then((result) => {
           navigate(from,{replace:true});
          
          
          })
          .catch((error) => {
           setErrmsg(error.message.slice(22,-2));
           
          
          });

       }
       

   }
    return (
        <div className='border-2 border-[#69C511] rounded-lg px-8 py-14  max-w-xl mx-auto my-10 shadow-md'>
            <h1 className='font-bruno text-2xl text-center mb-8'>Sign In</h1>

            <form className='flex flex-col gap-3' onSubmit={handleSignin}>


                <label htmlFor="Email">Email</label>
                <input type="email" name='email' placeholder='Enter your Email' className='border-2 rounded-lg p-2' />

                <label htmlFor="Password">Password</label>
                <input type="password" name='pass' placeholder='Enter your password' className='border-2 rounded-lg p-2' />
                <p className=''>Forgot Password? <span onClick={handleResetpass} className='text-[#ff7a2d] cursor-pointer' >Click Here.</span></p>
                

                
                <p className="text-red-600 mb-5 h-[10px]">{errmsg}</p>

                <button className='p-2 bg-[#69C511] text-white font-bold rounded-lg my-4 '>Sign Up</button>

                <p>New to this site? <Link to='/signup' className="text-[#69C511]">Sign up here</Link></p>

            </form>
            <p className="text-center my-5">Or Sign in with</p>

            <div className="flex flex-col justify-center items-center gap-5">
            <button onClick={googleHandler} className="flex items-center  gap-4 rounded-lg shadow-md bg-[#f0efef] p-3"> <img className="w-[20px]  " src={google} alt="" /> <p>Sign in with google</p></button>
            <button onClick={githubHandler} className="flex items-center  gap-4 rounded-lg shadow-md bg-[#252525] p-3"> <img className="w-[20px]  " src={github} alt="" /> <p className="text-white">Sign in with google</p></button>

            </div>
            

           
        </div>
    );
};

export default SignIn;