import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Gallary from '../components/Gallary';
import CatCard from '../components/CatCard';
import Partner from '../components/Partner';
import FlashSaleItem from '../components/FlashSaleItem';
import { getToysbycat } from '../utilities/apiCaller';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigation } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';


const Home = () => {
  const [activeTab,setActiveTab]=useState('sportsCar');
  const [catdata,setCatdata]=useState([]);
  useEffect(() => {
    AOS.init();
  }, []);

 useEffect(()=>{
  getData();
 

 },[activeTab])

 const getData= async()=>{
  const data= await getToysbycat(activeTab);
  setCatdata(data); 
 }
 const navigation = useNavigation();
 if(navigation.state==='loading') {
  return <LoadingSpinner/>
 }
  
  return (
    <div>
      <Banner/>
      <Gallary />
      
      <div className="mb-8">
      <h2 className="text-3xl font-bruno text-center mb-20">Flash Sale</h2>
        <div className="border-2 p-4">
        <div className="flex justify-end"><button className='font-semibold text-[#69C511]'>See More</button></div>
        <div data-aos="zoom-in-up" data-aos-duration="2000" className="flex gap-4  overflow-x-auto">

        <FlashSaleItem image="https://shazzad-hossen.github.io/image-host/images/cars/car2.jpg" title="Sports car" price='3000' discount='50' />


        <FlashSaleItem image="https://shazzad-hossen.github.io/image-host/images/cars/car2.jpg" title="Sports car" price='3000' discount='50' />


        <FlashSaleItem image="https://shazzad-hossen.github.io/image-host/images/cars/car2.jpg" title="Sports car" price='3000' discount='50' />

        <FlashSaleItem image="https://shazzad-hossen.github.io/image-host/images/cars/car2.jpg" title="Sports car" price='3000' discount='50' />

        <FlashSaleItem image="https://shazzad-hossen.github.io/image-host/images/cars/car2.jpg" title="Sports car" price='3000' discount='50' />






        </div>
        
        </div>
      </div>

      <section>
      <h2 className="text-3xl font-bruno text-center mb-20">Shop by Category</h2>

      <div className="flex justify-center">
      <div className=" shadow-lg flex items-center text-lg font-medium justify-center ">
        <button onClick={()=>setActiveTab('sportsCar')} className={` p-2 rounded-l-lg ${activeTab==='sportsCar'? 'bg-[#69C511]': 'bg-slate-300'}`}>Sports Car</button>
        <button onClick={()=>setActiveTab('fireTruck')} className={`p-2 border-x-[1px] ${activeTab==='fireTruck'? 'bg-[#69C511]': 'bg-slate-300'}`}>Fire Truck</button>
        <button  onClick={()=>setActiveTab('policeCar')}className={`p-2 rounded-r-lg ${activeTab==='policeCar'? 'bg-[#69C511]': 'bg-slate-300'}`}>Police Car</button>
      </div>
      </div>
      
      <p className='my-5'>Showing results for category:
      {
        activeTab==='sportsCar'? <span className='font-semibold ml-2'>Sports Car</span>: activeTab==='fireTruck'?<span className='font-semibold ml-2'>Fire Truck</span>: <span className='font-semibold ml-2'>Police Car</span>
      } </p>
      <div className="flex justify-center">
      <div data-aos="fade-up" data-aos-duration="2000" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">

        {catdata.map((data,i)=><CatCard key={i}  data={data}/>)}
        
        
        


      </div>
      </div>
      
      
      
      </section>

      <Partner/>
    </div>
  );
};

export default Home;