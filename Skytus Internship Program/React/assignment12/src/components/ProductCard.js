import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "8px" }}>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100%", height: "150px", objectFit: "contain" }}
      />
      <h4>{product.title.substring(0, 40)}...</h4>
      <p>${product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>

      <br /><br />

      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
}

export default ProductCard;