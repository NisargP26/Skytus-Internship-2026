import { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <header className="header">
      <h2 className="logo">ShopEase</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
