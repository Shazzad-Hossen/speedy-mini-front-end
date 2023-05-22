import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallary = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    AOS.init();
  }, []);

  const images = [
    'https://shazzad-hossen.github.io/image-host/images/cars/car1.jpg',
    'https://shazzad-hossen.github.io/image-host/images/cars/car2.jpg',
    'https://shazzad-hossen.github.io/image-host/images/cars/car3.jpg',
    'https://shazzad-hossen.github.io/image-host/images/cars/car4.jpg',
    'https://shazzad-hossen.github.io/image-host/images/cars/car5.jpg',
    'https://shazzad-hossen.github.io/image-host/images/cars/car6.jpg',
    'https://shazzad-hossen.github.io/image-host/images/cars/car7.jpg',
    'https://shazzad-hossen.github.io/image-host/images/cars/car8.jpg'
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bruno text-center mb-20">Gallery</h2>
      <div data-aos="fade-up" data-aos-duration="1000" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden relative cursor-pointer"
            onClick={() => handleImageClick(image)}
          >
            <img src={image} alt={`Image ${index + 1}`} className="w-full h-auto border-2 p-3" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative max-w-4xl">
            <img src={selectedImage} alt="Selected Image" className="w-full h-[500px]" />
            <button
              className="absolute top-4 right-4 bg-[#69C511] hover:bg-[#438604] text-white py-2 px-4 rounded"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallary;
