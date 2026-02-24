import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Navbar.css";
function Navbar() {
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div style={{
      padding: "15px",
      display: "flex",
      justifyContent: "space-between",
      background: "#222",
      color: "white"
    }}>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Home
      </Link>

      <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
        Cart ({totalItems})
      </Link>
    </div>
  );
}
<div className="navbar">  </div>
export default Navbar;