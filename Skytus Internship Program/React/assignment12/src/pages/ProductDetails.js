import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError("Failed to fetch product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div style={{ padding: "20px", display: "flex", gap: "30px" }}>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "300px", objectFit: "contain" }}
      />

      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>${product.price}</h3>

        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;