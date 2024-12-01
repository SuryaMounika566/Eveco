import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem'; 

import '../styles/LatestCollection.css';

const Latest = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="latest-collection">
      <div className="header">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="subheading">Explore our latest collections</p>
      </div>

      {/* Rendering products */}
      <div className="product-grid">
        {latestProducts.map((item, index) => (
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default Latest;