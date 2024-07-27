
import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../api/endpoints';
import Cards from './Cards';
import '../styles/amazon.css';
import Modal from './Modal';

function Amazon({ handleClick, showModal, setShowModal, modalMessage, setModalMessage }) {
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

  const handleAddToCart = (item) => {
    if (item.stock === 0) {
      setModalMessage('This product is out of stock');
      setShowModal(true);
      return;
    }
    handleClick(item);
  };

  return (
    <section>
      {products.map((item) => (
        <Cards item={item} key={item.id} handleClick={handleAddToCart} />
      ))}
      {showModal && <Modal message={modalMessage} onClose={() => setShowModal(false)} />}
    </section>
  );
}

export default Amazon;
