import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [Categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/news-categories')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setCategories(data))
    }, []);
    return (
        <div>
            <h3>All Category {Categories.length}</h3>
            {
                Categories.map(category => <p key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;