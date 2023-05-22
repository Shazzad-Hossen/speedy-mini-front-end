import React, { useContext, useState } from "react";
import Select from "react-select";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToy } from "../utilities/apiCaller";

const AddToy = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { user } = useContext(AuthContext);
  const [err, setErr] = useState(" ");

  const options = [
    { value: "sportsCar", label: "Sports Car" },
    { value: "fireTruck", label: "Fire truck" },
    { value: "policeCar", label: "Police Car" },
    { value: "others", label: "Others" },
  ];
  const addHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const tname = form.tname.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const ratings = form.ratings.value;
    const quantity = form.quantity.value;
    const desc = form.desc.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    if (photo==='') {
        toast.error("Please give photo url");
    }
    else if (tname==='') {
        toast.error("Please enter a name");
    }
    else if (selectedOption=== null) {
        toast.error("Please select a category");
    }
    else if (price==='') {
        toast.error("Please enter price");
    }
    else if (ratings==='') {
        toast.error("Please give a ratings");
    }
    else if (quantity==='') {
        toast.error("Please select available quantity");
    }
    else if (desc==='') {
        toast.error("Please add some description");
    }
    else if (sellerName==='') {
        toast.error("Please enter seller name");
    }
    else {
      const category = selectedOption.value;
      const data = {
        tname,
        photo,
        category,
        price,
        ratings,
        quantity,
        desc,
        sellerName,
        sellerEmail,
      };

     const res= addToy(data);
      //console.log(res)
      
    }
  };
  return (
    <div className="my-12">
        <ToastContainer />
      <h2 className="text-3xl font-bruno text-center mb-20">Add A Toy</h2>

      <form onSubmit={addHandler} className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="Photo">Photo Url</label>
            <input
              className="border-2 rounded-lg p-2"
              type="text"
              name="photo"
              defaultValue="https://images.meesho.com/images/products/99166694/esjwk_512.webp"
            />

            <label htmlFor="toyname">Toy Name</label>
            <input
              className="border-2 rounded-lg p-2"
              type="text"
              name="tname"
              placeholder="Enter toy name"
            />

            <label htmlFor="Category">Category</label>
            <Select defaultValue={selectedOption}
             onChange={setSelectedOption} 
             options={options} />
           

            <label htmlFor="price">Price</label>
            <input
              className="border-2 rounded-lg p-2"
              type="text"
              name="price"
              placeholder="Enter the price of the toy"
            />

            <label htmlFor="rating">Ratings (out of 5) </label>
            <input
              className="border-2 rounded-lg p-2"
              type="text"
              name="ratings"
              placeholder="4.5"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="quantity">Quantity</label>
            <input
              className="border-2 rounded-lg p-2"
              type="text"
              name="quantity"
              placeholder="Enter available quantity"
            />

            <label htmlFor="description">Detailed Descriptions</label>
            <textarea
              className="border-2 rounded-lg p-2"
              type="text"
              name="desc"
              placeholder="Write detailed descriptions about the toy"
            />

            <label htmlFor="Seller Name">Seller Name</label>
            <input
              className="border-2 rounded-lg p-2"
              type="text"
              name="sellerName"
              defaultValue={user.displayName}
            />

            <label htmlFor="Seller Email">Seller Email</label>
            <input
              disabled
              className="border-2 rounded-lg p-2"
              type="text"
              name="sellerEmail"
              defaultValue={user.email}
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button className="   mt-8  text-lg w-[150px] font-semibold text-white bg-[#69C511] p-2 rounded-lg">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
