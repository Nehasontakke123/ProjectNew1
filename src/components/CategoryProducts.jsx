import React from 'react'; 
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 Import useNavigate
import "../assets/css/CategoryProducts.css";

const CategoryProducts = ({ category }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // 👈 Initialize useNavigate

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const response = await axios.get(
          `https://projectnewbackend1-1.onrender.com/api/products/category/${encodeURIComponent(category)}`
        );

        if (Array.isArray(response.data.data)) {
          setProducts(response.data.data);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error("Error fetching category products:", error);
        setProducts([]);
      }
    };

    fetchCategoryProducts();
  }, [category]);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="category-container">
      <h2 className="category-title">Products in {category} Category</h2>

      {products.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <div
              key={product._id}
              className="product-card"
              onClick={() => handleProductClick(product._id)}
              style={{ cursor: "pointer" }}
            >
              {product.images && product.images.length > 0 && (
                <div className="product-images">
                  <img src={product.images[0]} alt="Image 1" />
                  <img src={product.images[1] || product.images[0]} alt="Image 2" />
                </div>
              )}
              <h4 className="product-name">{product.name}</h4>
              <p className="product-price">₹{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryProducts;
