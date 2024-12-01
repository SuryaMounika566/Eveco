import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import '../styles/Collection.css'; 
const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const navigate = useNavigate(); // Hook for navigation
  const[category,setCategory]=useState([]);

  const toggleCategory=(e) =>{
    if(category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item => item!==e.target.value))

    }
    else{
      setCategory(prev=>[...prev,e.target.value])
    }
  }
  const applyFilter=()=>{
    let productsCopy=products.slice();
    if(category.length>0){
      productsCopy=productsCopy.filter(item=>category.includes(item.category));

    }
    setFilterProducts(productsCopy)

  }
  useEffect(() => {
    setFilterProducts(products);
  }, [products]);
  useEffect(()=>{
    applyFilter();
  },[category])
  return (
    <div className="collection-container">
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate('/')}>
        Back to Homepage
      </button>

      <div className="collection-content">
        {/* Filters Section */}
        <div className="filters-container">
          <p className="filters-title" onClick={() => setShowFilter(!showFilter)}>FILTERS</p>
          <div className={`filters-box ${showFilter ? "" : "hidden"}`}>
            <p className="filter-category-title">CATEGORIES</p>
            <div className="filter-items">
              <div className="filter-item">
                <input className="filter-checkbox" type="checkbox" value={"Decor"} onChange={toggleCategory}/> Decor
              </div>
              <div className="filter-item">
                <input className="filter-checkbox" type="checkbox" value={"Plant"} onChange={toggleCategory} /> Plant
              </div>
              <div className="filter-item">
                <input className="filter-checkbox" type="checkbox" value={"Cutlery"} onChange={toggleCategory}/> Cutlery
              </div>
            </div>
          </div>
        </div>

        {/* Sort Dropdown */}
        
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filterProducts.map((item, index) => (
          <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
