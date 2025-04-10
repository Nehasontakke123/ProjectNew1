import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/css/ProductDetails.css";
import { useCart } from "../context/CartContext"; // ✅ Import cart context

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(""); // for big image
  const { addToCart } = useCart(); // ✅ Use cart context

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://projectnewbackend1-1.onrender.com/api/products/${id}`
        );
        setProduct(response.data.data);
        if (response.data.data.images.length > 0) {
          setSelectedImage(response.data.data.images[0]);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="product-details-container">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Go to Home
      </button>

      <div className="product-top-section">
        <div className="product-images-section">
          <img
            src={selectedImage}
            alt="Selected"
            className="main-product-image"
          />

          <div className="thumbnail-images">
            {product?.images?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className="thumbnail-image"
                onMouseEnter={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="product-info-section">
          <h2>{product.name}</h2>
          <p><strong>Price:</strong> ₹{product.price}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Metal Type:</strong> {product.metalType}</p>
          <p><strong>Gold Color:</strong> {product.goldColor}</p>
          <p><strong>Weight:</strong> {product.weight}g</p>
          <p><strong>Availability:</strong> {product.availability}</p>
          <p><strong>Description:</strong> {product.description}</p>

          <h4>Price Breakup</h4>
          <ul>
            <li>Gold Price: ₹{product.priceBreakup?.goldPrice}</li>
            <li>Making Charge: ₹{product.priceBreakup?.makingCharge}</li>
            <li>Tax: ₹{product.priceBreakup?.tax}</li>
          </ul>

          <div className="product-actions">
            <button className="buy-now-btn">Buy Now</button>

            {/* ✅ Updated Add to Cart button */}
            <button
              className="add-to-cart-btn"
              onClick={() => {
                addToCart(product);
                alert("Product added to cart!");
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
