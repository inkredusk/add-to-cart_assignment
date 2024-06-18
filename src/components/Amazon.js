import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../api/endpoints';
import Cards from './Cards';
import '../styles/amazon.css';

function Amazon({ handleClick }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productList = await getAllProducts();
                setProducts(productList);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <section>
            {products.map((item) => (
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))}
        </section>
    );
}

export default Amazon;
