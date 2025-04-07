import axios from "axios";
import { useEffect, useState } from "react";

const CategoryProducts = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const response = await axios.get(`https://projectnewbackend1-1.onrender.com/api/products/category/${encodeURIComponent(category)}`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching category products:", error);
      }
    };

    fetchCategoryProducts();
  }, [category]);

  return (
    <div>
      <h2>Products in {category} Category</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <strong>{product.name}</strong> - ₹{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryProducts;
