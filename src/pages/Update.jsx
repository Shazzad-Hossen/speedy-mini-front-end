import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
import { updateToy } from "../utilities/apiCaller";

const Update = () => {
  const [data, setData] = useState(useLoaderData());

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked")
    const id= data._id;
    const tname= e.target.tname.value;
    const quantity= e.target.quantity.value;
    const desc= e.target.desc.value;
    const price= e.target.price.value;
   

    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
     
      if (result.isConfirmed) {
        updateToy({id, tname, quantity, desc, price })
       
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  };
  
  return (
    <div className="my-16">
      <h2 className="text-3xl font-bruno text-center mb-20">Update Toy Info</h2>

      <div className="mt-16 ">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col gap-4 w-full">
              <label className="text-lg font-semibold" htmlFor="Toy Name">
                Toy Name
              </label>
              <input
                className="border-2 rounded-lg p-2"
                name="tname"
                type="text"
                defaultValue={data.tname}
              />

              <label className="text-lg font-semibold" htmlFor="price">
                Price (BDT)
              </label>
              <input
                className="border-2 rounded-lg p-2"
                name="price"
                type="text"
                defaultValue={data.price}
              />

              <label className="text-lg font-semibold" htmlFor="quantity">
                Quantity
              </label>
              <input
                className="border-2 rounded-lg p-2"
                name="quantity"
                type="text"
                defaultValue={data.quantity}
              />
            </div>
            <div className="flex flex-col gap-4 w-full">
              <label className="text-lg font-semibold" htmlFor="description">
                Description
              </label>
              <textarea
                className="border-2 rounded-lg p-2"
                name="desc"
                type="text"
                defaultValue={data.desc}
              />
            </div>
          </div>
         <div className="flex justify-end mt-4">
         <button className="bg-[#69C511] p-2 rounded-md text-white font-medium">Update</button>
         </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
