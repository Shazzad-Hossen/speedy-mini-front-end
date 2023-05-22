import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import ReactStarsRating from 'react-awesome-stars-rating';


const CatCard = ({data}) => {
    
    const {user}=useContext(AuthContext);
    const handleToast=()=>{


     if(!user) {
        toast.warn("You have to log in first to view details");
     }

    }
    return (
        <div>
            
            <div className="border-2 rounded-md p-2 shadow-sm shadow-lime-200">
                <img className='object-cover rounded-md max-w-[300px] w-[400px] h-[200px]' src={data.photo} alt="" />
                <div className=" flex flex-col gap-2 justify-start pl-6">
                    <h1 className='text-xl font-bold'>{data.tname}</h1>
                    <p className='text-md font-semibold text-[#479125]'>Price: <span>{data.price} BDT</span></p>
                    <p className='text-md font-semibold text-[#474747]'> <ReactStarsRating className="flex gap-2" size={15} isHalf={true} isEdit={false} value={Number(data.ratings)} /></p>
                   
                    <div className="flex justify-end">
                        <Link onClick={handleToast} to={`/details/${data._id}`}><button className='bg-[#8cb962] p-2 text-white rounded-md'>Details</button></Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default CatCard;