import React, { useState, useEffect } from 'react';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: 'https://media.istockphoto.com/id/186545379/photo/red-sports-car-on-a-racetrack.jpg?s=612x612&w=0&k=20&c=J-F5EgMIaJJhQummWwc1HA0jcSCwS82muXuNBST7OEc=',
      heading: 'FLAT 70% OFF',
      description: 'On All Kinds of Racing Car Toys',
    },
    {
      image: 'https://c4.wallpaperflare.com/wallpaper/304/295/694/race-car-race-track-landscape-hd-wallpaper-preview.jpg',
      heading: 'FREE HOME DELIVERY',
      description: 'Only For This Month',
    },
    {
      image: 'https://media.windrushcarstorage.co.uk/uploads/2022/12/the-roots-of-british-racing-green-main-original-1.jpg',
      heading: 'DEALS OF THE WEEK',
      description: 'Best Price on Selected Products',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[500px] ">
      
      {slides.map((slide, index) => (
        <div
          key={index}
          className={` h-[500px] absolute inset-0 ${
            index === currentSlide ? 'z-10 opacity-100' : 'z-0 opacity-0'
          } transition-opacity duration-500`}
        >
          <img src={slide.image} alt={slide.heading} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          <div className=" flex flex-col justify-center h-full absolute top-0 pl-20 w-full   z-10">
            <h1 className=" break-all text-4xl font-bold text-white mb-4">{slide.heading}</h1>
            <p className="break-all text-lg text-white mb-8">{slide.description}</p>
            <button className="bg-[#69C511] hover:bg-[#438604] text-white py-4 font-bruno px-2 rounded w-[150px] ">
              SHOP NOW
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
