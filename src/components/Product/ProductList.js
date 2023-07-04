import { motion } from 'framer-motion';
import Sidebar from '../SideBar/Sidebar';
import ProductCard from './ProductCard';
import { useState, useEffect } from 'react';
import './ProductList.css';
import useFetch from '../../CustomHooks/useFetch';


export default function ProductList({ toggleSidebar, showSidebar }) {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (selectedCategories) => {
    setSelectedCategories(selectedCategories);
  };

  const { data, error} = useFetch('https://fakestoreapi.com/products');

  useEffect(() => {
    if (data) {
      let filteredData = data;
      if (selectedCategories.length) {
        filteredData = data.filter((product) =>
          selectedCategories.includes(product.category)
        );
      }
      setProducts(filteredData);
    }
  }, [data, selectedCategories]);


  if (error) {
    return <p>Error: {error.message}</p>;
  }


  return (
    <div className="productListContainer">
      <Sidebar
        onCategoryChange={handleCategoryChange}
        toggleSidebar={toggleSidebar}
        showSidebar={showSidebar}
      />
      <div className="productCardList">
        <div className="productListHeader">
          <h2>Products</h2>
          <button className="filterButton" onClick={toggleSidebar}>
            Filter
          </button>
        </div>
        <motion.div layout className="productListContent">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </motion.div>

      </div>
    </div>
  );

}
