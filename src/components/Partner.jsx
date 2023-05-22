import React from "react";
import Marquee from "react-fast-marquee";

const Partner = () => {
  const partners = [
    { icon: "https://shazzad-hossen.github.io/image-host/images/partner/p1.png" },
    { icon: "https://shazzad-hossen.github.io/image-host/images/partner/p2.png" },
    { icon: "https://shazzad-hossen.github.io/image-host/images/partner/p3.png" },
    { icon: "https://shazzad-hossen.github.io/image-host/images/partner/p4.png" },
    { icon: "https://shazzad-hossen.github.io/image-host/images/partner/p5.png" },
    { icon: "https://shazzad-hossen.github.io/image-host/images/partner/p6.png" },
    { icon: "https://shazzad-hossen.github.io/image-host/images/partner/p7.png" },
    { icon: "https://shazzad-hossen.github.io/image-host/images/partner/p8.png" },
    { icon: "https://shazzad-hossen.github.io/image-host/images/partner/p9.png" },
    { icon: "https://shazzad-hossen.github.io/image-host/images/partner/p10.png" },
    { icon: "https://shazzad-hossen.github.io/image-host/images/partner/p11.png" },
    { icon: "https://shazzad-hossen.github.io/image-host/images/partner/p12.png" },
  ];
  return (
    <div>
      <h2 className="text-3xl font-bruno text-center mb-8 mt-10">Our Partner</h2>
      <div className="payment-partner">
        <Marquee gradient={false} speed={40} className="flex  items-center  p-5">
          {partners.map((partner, index) => (
            
              <img  key={index}
                src={partner.icon}
                alt='logo'
                className="grayscale h-[80px] mx-9"
              />
              
            
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Partner;
