import React, { useEffect, useState } from 'react';
import BlogCards from '../components/BlogCards';

const Blogs = () => {
    const [data,setData]=useState([]);
    

    useEffect(()=>{
        fetch('./blogdata.json')
        .then(res=>res.json())
        .then(dt=>setData(dt))

    },[])
    return (
        <div>
            <h2 className="text-3xl mt-8 font-bruno text-center mb-20">Blogs</h2>
      
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.map((d,i)=><BlogCards data={d} key={i} />)}
            </div>
        </div>
    );
};

export default Blogs;