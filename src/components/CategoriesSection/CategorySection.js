import React from 'react';
import { Link } from 'react-router-dom'
import categoryData from "../data/Categories_Info.json"
import './categoriesSection.css'
import CategoryIcon1 from '../../Images/men_fashion3-min.jpg'
import CategoryIcon2 from '../../Images/womanFashion3-min.jpg'
import CategoryIcon3 from '../../Images/jewellery2-min.jpg'
const CategoryImages = [CategoryIcon1, CategoryIcon2,CategoryIcon3];

export default function CategorySection() {
    return (
        <section className="categorySection">
            <h2>Categories</h2>
            <div className="categoryContainer">
                {categoryData.categories.map((category,index) => (
                    <div className='categoryCard' key={category.categoryID}>
                        <Link to={category.categoryUrl}>
                            <div className='categoryCardImage'>
                                <img src={CategoryImages[index % CategoryImages.length]} alt='categoryImage' loading="lazy"/>
                            </div>
                            <div className='categoryTitle'>{category.CategoryTitle}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}