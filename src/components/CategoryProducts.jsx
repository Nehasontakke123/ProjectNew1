import axios from "axios";
import { useEffect, useState } from "react";

const CategoryProducts = ({ category }) => {
  const [products, setProducts] = useState([]);

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

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products in {category} Category</h2>

      {products.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
          {products.map((product) => (
            <div
              key={product._id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                background: "#fff",
              }}
            >
              {product.images && product.images.length > 0 && (
                <img
                  src={`https://projectnewbackend1-1.onrender.com/${product.images[0]}`}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                />
              )}
              <h4 style={{ marginBottom: "5px" }}>{product.name}</h4>
              <p style={{ color: "#333", fontWeight: "bold" }}>₹{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryProducts;
