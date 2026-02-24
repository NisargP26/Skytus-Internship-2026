import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} style={{ marginBottom: "20px" }}>
              <h4>{item.title}</h4>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <hr />
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
        </>
      )}
    </div>
  );
}

export default Cart;