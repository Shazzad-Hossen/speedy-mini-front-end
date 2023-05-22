import React from 'react';

const FlashSaleItem = ({ image, title, price, discount }) => {
  return (
    <div className="max-w-[200px] mx-auto border-2 p-2">
      <div className="relative">
        <img src={image} alt={title} className="w-[400px] h-auto" />
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded">
          {discount}% OFF
        </span>
      </div>
      <div className="">
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        <div className="flex items-center mt-2">
          <span className="text-gray-600 text-sm line-through mr-2">BDT{price}</span>
          <span className="text-red-500 text-lg font-bold">BDT{calculateDiscountedPrice(price, discount)}</span>
        </div>
        
      </div>
    </div>
  );
};

// Helper function to calculate the discounted price
const calculateDiscountedPrice = (price, discount) => {
  const discountAmount = (price * discount) / 100;
  return (price - discountAmount).toFixed(2);
};

export default FlashSaleItem;
