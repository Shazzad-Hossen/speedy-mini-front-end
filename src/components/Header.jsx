import React, { useContext, useEffect, useState } from 'react';
import logo from '../assets/images/logo/logo.png';
import { TiThMenu } from 'react-icons/ti';
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  
    const [menu,setMenu]=useState(false);
    const {signOutUser,user}= useContext(AuthContext)
    const pImg= user?.photoURL || ''
    const navigate = useNavigate();
    const location=useLocation().pathname;
    let title='';

    if(location==='/') title = 'Speedy Mini | Home';
    else  if(location==='/signin') title = 'Speedy Mini | Sign In';
    else  if(location==='/signup') title = 'Speedy Mini | Sign Up';
    else  if(location==='/blogs') title = 'Speedy Mini | Blogs';
    else  if(location==='/addtoy') title = 'Speedy Mini | Add Toy';
    else  if(location==='/alltoys') title = 'Speedy Mini | All Toys';
    else  if(location==='/mytoys') title = 'Speedy Mini | My Toys';
    else  if(location.slice(0,8)==='/details') title = 'Speedy Mini | Product Details';
    else  if(location.slice(0,8)==='/update/') title = 'Speedy Mini | Update Details';
    else title='Speedy Mini | 404 Not found';
    document.title = title;
    
    
       
       
     
       
      
        

      document.title = title; // Set the document title
    const signOut= ()=>{
        signOutUser();
        navigate("/signin");


    }
 

    const navItems= 
    <>
    <li><NavLink className={({isActive})=>isActive?"text-[#69C511] font-semibold pb-2 border-b-2 border-b-[#69C511]": ""} to='/'>Home</NavLink></li>
    <li><NavLink className={({isActive})=>isActive?"text-[#69C511] font-semibold pb-2 border-b-2 border-b-[#69C511]": ""} to='/alltoys'>All Toys</NavLink></li>
    {user&& <><li><Link to='/mytoys'>My Toys</Link></li>
    <li><NavLink className={({isActive})=>isActive?"text-[#69C511] font-semibold pb-2 border-b-2 border-b-[#69C511]": ""} to='/addtoy'>Add A Toys</NavLink></li></>}
    <li><Link to='/blogs'>Blogs</Link></li>
    {!user? <> <li><NavLink className={({isActive})=>isActive?"text-[#69C511] font-semibold pb-2 border-b-2 border-b-[#69C511]": ""} to='/signin'>Sign In</NavLink></li>
    <li><NavLink className={({isActive})=>isActive?"text-[#69C511] font-semibold pb-2 border-b-2 border-b-[#69C511]": ""} to='/signup'>Sign Up</NavLink></li></> : <li><button onClick={signOut}>Sign Out</button> </li>}
    
    

    </>
    return (
        <div className="shadow-lg">
             <ToastContainer />
            <Tooltip id="my-tooltip" className='z-[300]' />
            <div onClick={()=>setMenu(!menu)} className=" md:hidden block">
            <div className={`z-[200] absolute ease-in-out duration-300  font-medium bg-[#d4fdae] rounded-md shadow-lg p-8 ${menu? 'left-2 top-2': 'left-2 top-[-800px]'}`}>
                <ul className='flex flex-col gap-4'>
                    {navItems}
                </ul>
            </div>
            </div>
            <div className='max-w-[1280px] mx-auto px-5 flex items-center justify-between'>
           <Link to='/'> <img className='w-[150px] h-[80px]' src={logo} alt="" /></Link>

            <div className=" flex items-center gap-4">
                <div className="hidden md:block">
                <ul className='flex items-center gap-4 font-medium '>
                    {navItems}
                </ul>
                </div>
                {user &&  <img data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} className='w-[30px] h-[30px] rounded-full z-[200]' src={pImg} alt="" />}
               <div onClick={()=>setMenu(!menu)} className="text-[#69C511] md:hidden">
                {menu?  <RxCross2 className='w-[100px] h-[30px]'/> :  <TiThMenu className='w-[100px] h-[30px]'/>}
               </div>
            </div>
        </div>
        </div>
    );
};

export default Header;