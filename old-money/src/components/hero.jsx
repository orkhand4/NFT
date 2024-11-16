import React, { useEffect, useState } from 'react';
import { hero } from '../data/hero';

const Hero = () => {
  const [heroData, setHeroData] = useState(hero[0]);
  let counter = 1;

  // // //
  
  const startHeroAnimation = () => {
    setInterval(() => {
      setHeroData(hero[counter]); 
      if (counter == hero.length-1) {
        counter=0
      } else {
        ++counter //2
      }
    }, 4000);
  };

  useEffect(() => {
    startHeroAnimation();
  }, []);

  return (
    <div className="py-8 px-4 container mx-auto bg-indigo-600 rounded-2xl flex items-center">
      <div className="flex-1">
        <h2 className="text-emerald-200 text-6xl max-w-xl leading-[110%] font-black tracking-wider uppercase">
          {heroData.title}
        </h2>
        <p className="mt-4 text-emerald-200 text-lg max-w-3xl leading-[130%] font-light tracking-wider uppercase">
          {heroData.subtitle}
        </p>
        <div className="flex gap-4 mt-4">
          <button className="py-2 px-6 hover:text-emerald-200">
            Shop Now!
          </button>
          <button className="py-2 px-6 bg-white rounded-md text-emerald-800 font-semibold hover:bg-emerald-200">
            More Info..
          </button>
        </div>
      </div>
      <div className="flex-1 rounded-3xl overflow-hidden">
        <img
          className="w-full h-full max-h-96 object-cover transition duration-300 hover:scale-110"
          src={heroData.imgSrc}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
