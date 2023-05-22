import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigation } from "react-router-dom";
import { delateToy, getMytoys } from "../utilities/apiCaller";
import { BsFillEyeFill } from "react-icons/bs";
import { MdEdit, MdDelete } from "react-icons/md";
import { AuthContext } from "../providers/AuthProvider";
import Swal from 'sweetalert2'
import Select from "react-select";
import LoadingSpinner from "../components/LoadingSpinner";



const Mytoys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
 const [sortby,setSortby]=useState(null);
  
 const options = [
  { value: 1, label: "ASC" },
  { value: -1, label: "DSC" },
];
  useEffect(() => {
    dataLoader(user.email,sortby?.value || 1);
  }, [sortby]);

  const dataLoader = async (email,sort) => {
    const data = await getMytoys(email,sort);
    setToys(data);
  };

  const handleDelete=(id)=>{


    Swal.fire({
      title: 'Do you sure you want to delete?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Don't delete`,
    }).then((result) => {
     
      if (result.isConfirmed) {
        delateToy(id);
        dataLoader(user.email)

       
       
      } else if (result.isDenied) {
        Swal.fire('Deletion Calcelled', '', 'info')
      }
    });
  }






  const navigation = useNavigation();
  if(navigation.state==='loading') {
   return <LoadingSpinner/>
  }

  return (
    <div className="my-12">
      <h2 className="text-3xl font-bruno text-center mb-20">My Toys</h2>
      <div className="flex justify-end mb-4"><div className="flex items-center gap-2"> <span>Sort by</span>
      <Select
            defaultValue={sortby}
            onChange={setSortby}
            placeholder={sortby?.value}
            options={options}
          /></div></div>

      <div className="container mx-auto">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className=" bg-[#44920f] text-white">
                <th className="text-start px-6 py-3">Toy Name</th>
                <th className="text-start px-6 py-3">Sub Category</th>
                <th className="text-start px-6 py-3">Price</th>
                <th className="text-start px-6 py-3">Quantity</th>
                <th className="text-start px-6 py-3">Seller</th>
                <th className="text-start px-6 py-3">Details</th>
                <th className="text-start px-6 py-3">Update</th>
                <th className="text-start px-6 py-3">Delete</th>
              </tr>
            </thead>
            <tbody>
              {toys.map((t, i) => (
                <tr key={i} className="odd:bg-gray-100 even:bg-white">
                  <td className="px-6 py-4 whitespace-nowrap">{t.tname}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{t.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{t.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{t.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {t.sellerName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {" "}
                    <Link to={`/details/${t._id}`}>
                      <button>
                        <BsFillEyeFill className="text-[#69C511] w-[20px] h-[20px]" />
                      </button>
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                   <Link to={`/update/${t._id}`}><button>
                      
                        <MdEdit className="text-[#0a0e07] w-[20px] h-[20px]" />
                      </button></Link>
                      

                      
                    
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    
                      <button onClick={()=>handleDelete(t._id)}>
                        <MdDelete className="text-[#d10909] w-[20px] h-[20px]" />
                      </button>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>




      












    </div>
  );
};

export default Mytoys;
