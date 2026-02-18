import { useEffect, useState } from "react";
import { fetchProducts } from "./services/api";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* =========================
     Fetch Products (API)
  ========================= */
  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="app">
      <h1>Product Listing</h1>

      {/* Loading State */}
      {loading && <p className="info">Loading products...</p>}

      {/* Error State */}
      {error && <p className="error">{error}</p>}

      {/* Product List */}
      {!loading && !error && (
        <ProductList products={products} />
      )}
    </div>
  );
}

export default App;
