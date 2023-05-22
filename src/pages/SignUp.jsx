import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import github from "../assets/images/icon/github.png";
import google from "../assets/images/icon/google.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const SignUp = () => {
    const [errmsg,setErrmsg]=useState("");
    const { createUser, updateUser, googleSignin, githubSignin } = useContext(AuthContext);
    const navigate = useNavigate();
    const googleHandler=()=>{
      googleSignin().
      then((result) => {
        navigate('/');
          
        }).catch((error) => {
          setErrmsg(error.message.slice(22,-2));
          
        });
      
   }
   const githubHandler=()=>{
      githubSignin().
      then((result) => {
        navigate('/');
          
      }).catch((error) => {
        setErrmsg(error.message.slice(22,-2));
        
      });
  
   }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setErrmsg("");
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        const confpassword=e.target.confpassword.value;
        const photo=e.target.photo.value;
        
        if(name==='') setErrmsg("Name can not be empty")
    else if(email==='') setErrmsg("Email can not be empty")
    else if(password==='') setErrmsg("You must enter a password")
    else if(confpassword==='') setErrmsg("Please confirm you password")
    else if(confpassword!==password) setErrmsg("Password doesn't matched");
    else {
        
        
        setErrmsg("");
        createUser(email, password)
        .then((result) => {
          if(photoUrl==='') photoUrl='https://www.pngitem.com/pimgs/m/557-5578368_empty-profile-picture-icon-hd-png-download.png'
          
          updateUser(name,photoUrl)
            .then(() => {
              navigate('/');
             
              
            })
            .catch((error) => {
              setErrmsg(error.message.slice(22,-2));
              
            });
  
          
        })
        .catch((error) => {
          setErrmsg(error.message.slice(22,-2));
        });


    }
    
    }
    return (
        <div className='border-2 border-[#69C511] rounded-lg px-8 py-14  max-w-xl mx-auto my-10 shadow-md'>
            <h1 className='font-bruno text-2xl text-center mb-8'>Sign Up</h1>

            <form className='flex flex-col gap-3' onSubmit={handleSubmit}>

                <label htmlFor="Name">Name</label>
                <input type="text" name='name' placeholder='Enter your name' className='border-2 rounded-lg p-2' />

                <label htmlFor="Email">Email</label>
                <input type="email" name='email' placeholder='Enter your Email' className='border-2 rounded-lg p-2' />

                <label htmlFor="Password">Password</label>
                <input type="password" name='password' placeholder='Enter your password' className='border-2 rounded-lg p-2' />

                <label htmlFor="ConfPassword">Confirm Password</label>
                <input type="confpassword" name='confpassword' placeholder='Enter your password' className='border-2 rounded-lg p-2' />

                <label htmlFor="photo">Photo Url</label>
                <input type="text" name='photo' placeholder='Enter your photo url' className='border-2 rounded-lg p-2' />
                <p className="text-red-600 mb-5 h-[10px]">{errmsg}</p>

                <button className='p-2 bg-[#69C511] text-white font-bold rounded-lg my-4 '>Sign Up</button>

                <p>Already have an account? <Link to='/signin' className="text-[#69C511]">Sign in here</Link></p>

            </form>
            <p className="text-center my-5">Or Sign in with</p>

            <div className="flex flex-col justify-center items-center gap-5">
            <button onClick={googleHandler} className="flex items-center  gap-4 rounded-lg shadow-md bg-[#f0efef] p-3"> <img className="w-[20px]  " src={google} alt="" /> <p>Sign in with google</p></button>
            <button onClick={githubHandler} className="flex items-center  gap-4 rounded-lg shadow-md bg-[#252525] p-3"> <img className="w-[20px]  " src={github} alt="" /> <p className="text-white">Sign in with google</p></button>

            </div>
            

           
        </div>
    );
};

export default SignUp;