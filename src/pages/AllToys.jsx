import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import Select from "react-select";
import { searchToy, toysPerpage } from "../utilities/apiCaller";
import { BsFillEyeFill } from 'react-icons/bs';
import LoadingSpinner from "../components/LoadingSpinner";

const AllToys = () => {
  const [toys, setToys] = useState(useLoaderData());
  const total = toys.length;
  const [selectedOption, setSelectedOption] = useState(null);
  const [pagecount, setPagecount] = useState([]);
  const [page, setPage] = useState(1);
  const [search,setSearch]=useState('');
  const options = [
    { value: 2, label: "2" },
    { value: 5, label: "5" },
    { value: 10, label: "10" },
    { value: 15, label: "15" },
    { value: 20, label: "20" },
    { value: 50, label: "50" },
    { value: 100, label: "100" },
  ];


  const effectLoader= async()=>{
    const opt = selectedOption === null ? 20 : selectedOption?.value;
    const div = total < opt ? 5 : opt;
    const arr = new Array(10);
    const pagesArr = [...arr.keys()];
    await setPagecount([...pagesArr]);
    const  data = await toysPerpage(opt, page);
    setToys(data);
  }

  
  useEffect(() => {
    effectLoader();
    
  }, [selectedOption]);

  const handlePage =async (p) => {
    await setPage(p);
    const data = await toysPerpage(selectedOption?.value, p);
   setToys(data);
  };

  const handleSearch=async()=>{
    const data= await searchToy(search);
    setToys(data);
   
  }
  const navigation = useNavigation();
 if(navigation.state==='loading') {
  return <LoadingSpinner/>
 }

  return (
    <div className="my-12">
      <h2 className="text-3xl font-bruno text-center mb-20">All Toy</h2>
      
    <div className="flex justify-end mb-6">
        <div className="flex items-center">
            <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Keywords" className="border-2 p-2 rounded-l-lg  border-r-0"  />
            <button onClick={handleSearch} className="bg-[#69C511] p-2 border-2 border-[#69C511]  rounded-r-lg text-white">Search</button>
        </div>
    </div>

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
                  <td className="px-6 py-4 whitespace-nowrap"> <Link to={`/details/${t._id}`}><button><BsFillEyeFill className="text-[#69C511] w-[20px] h-[20px]"/></button></Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-between my-12 flex-col md:flex-row gap-4">
        <div className="flex items-center gap-2">
          <span>Showing</span>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            placeholder={selectedOption?.value || 20}
            options={options}
          />
          <span>items per page</span>
        </div>

        <div className="">
          {pagecount.map((p, i) => (
            <button
              onClick={() => handlePage(p + 1)}
              className={`bg-[#69C511] py-2 px-4 border-r-[1px] border-[#4c910c] ${page===p+1? 'bg-[#4c910c]': ''}`}
              key={i}
            >
              {p + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllToys;
