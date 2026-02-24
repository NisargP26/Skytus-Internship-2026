import { useEffect, useState } from "react";
import api from "../services/api";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import ProductCard from "../components/ProductCard";
import "./Home.css";
<div className="page">  </div>
function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
<div className="product-grid">  </div>
export default Home;