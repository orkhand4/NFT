import React from 'react'

const ProductCard = ({ item }) => {
  return (
    <div className="w-1/5 flex flex-col gap-4 cursor-pointer border border-gray-600 rounded-xl overflow-hidden">
      <div className="h-72 overflow-hidden">
        <img
          className="w-full h-full object-cover transition duration-300 hover:scale-105"
          src={item.img}
          alt=""
        />
      </div>
      <h2 className="text-white text-2xl tracking-wider font-extralight px-4 text-center whitespace-nowrap">
        {item.name}
      </h2>
      <div className="flex gap-4 justify-center items-center">
        {item?.hasDiscount && (
          <p className="text-gray-400 text-xl line-through tracking-wide">
            {item.beforePrice}
          </p>
        )}
        <p className="text-emerald-200 text-2xl tracking-wide">{item.price}</p>
      </div>
      <h3 className="text-center pb-4 text-gray-400 text-xl tracking-wider">
        Stock count: <span className="text-white ">{item.count}</span>
      </h3>
    </div>
  );
}

export default ProductCard