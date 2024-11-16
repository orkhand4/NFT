import React from 'react'
import Header from '../components/header';
import { products } from '../data/products';
import ProductCard from '../components/productCard';

const Products = () => {
  
  return (
    <div>
      <Header />

      <div className="container mx-auto p-8 flex gap-8 flex-wrap justify-between">
        {products.map((item) => {
          return (
            <ProductCard item={item} key={item.id}/>
          );
        })}
      </div>
    </div>
  );
}

export default Products