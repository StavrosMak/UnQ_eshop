import React, { useState, useEffect } from "react";
import "./FeaturedCollectionSection.css";
import ProductCard from "../Product/ProductCard";
import { motion } from 'framer-motion'
import categories from '../data/CategoryData'
import useFetch from "../../CustomHooks/useFetch"
const productLimit = 4;


export default function FeaturedCollections() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState(categories[0].CategoryName);

    const { data: fetchedProducts, loading: isLoading } = useFetch('https://fakestoreapi.com/products');

    useEffect(() => {
        if (fetchedProducts) {
            const filteredData = fetchedProducts.filter((product) => product.category === category);
            const limitedData = filteredData.slice(0, productLimit);
            setProducts(limitedData);
        }
    }, [fetchedProducts, category]);

    return (
        <section className="featuredCollections">
            <div className="featuredCollectionsContainer">
                <div className="featuredCollections--Header">
                    <h2>Featured Collections</h2>
                </div>
                <div className="featuredCollections--List">
                    <ul>
                        {categories.map((categoryItem) => (
                            <li key={categoryItem.categoryID}>
                                <button
                                    className={category === categoryItem.CategoryName ? 'active' : ''}
                                    onClick={() => setCategory(categoryItem.CategoryName)}
                                >
                                    {categoryItem.CategoryTitle}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="featured--productCardList">
                    {isLoading ? (<p>Loading...</p>)
                        : (products.map((product) => (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                key={product.id}
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))
                        )}
                </div>
            </div>
        </section>
    );
}
