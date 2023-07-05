import React from 'react';
import { Link } from 'react-router-dom'
import categories from "../data/CategoryData"
import './categoriesSection.css'

export default function CategorySection() {
    return (
        <section className="categorySection">
            <h2>Categories</h2>
            <div className="categoryContainer">
                {categories.map((category, index) => (
                    <div className='categoryCard' key={category.categoryID}>
                        <Link to={category.categoryUrl}>
                            <div className='categoryCardImage'>
                                <img src={category.categoryImage} alt='' loading='lazy' />
                            </div>
                            <div className='categoryTitle'>{category.CategoryTitle}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}