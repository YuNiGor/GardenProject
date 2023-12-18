import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories } from '../../redux/store/slice/cotegoriesSlice';
import { Link } from 'react-router-dom';
import styles from './Categories.module.css';

function Categories() {
    const dispatch = useDispatch();
    const { categoriesList } = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch]);

    return (
        <div className={styles.categoriesContainer}>
            <h1>Categories</h1>
            <div className={styles.categoriesGrid}>
                {categoriesList.map(category => (
                    <Link to={`/categories/${category.id}`} key={category.id} className={styles.categoryCard}>
                        <img src={`${process.env.REACT_APP_API_URL}${category.image}`} alt={category.title} />
                        <h3>{category.title}</h3>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Categories;
