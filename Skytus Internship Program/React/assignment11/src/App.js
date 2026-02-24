import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import FilterDropdown from "./components/FilterDropdown";
import ProductList from "./components/ProductList";
import "./App.css";
const productsData = [
  { id: 1, name: "iPhone", category: "Electronics" },
  { id: 2, name: "Shirt", category: "Clothing" },
  { id: 3, name: "Laptop", category: "Electronics" },
  { id: 4, name: "Shoes", category: "Footwear" },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  useEffect(() => {
    const filtered = productsData.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });

    setFilteredProducts(filtered);
  }, [searchTerm, category]);

return (
  <div className="container">
    <h1>Assignment 11 - Search & Filter</h1>

    <div className="controls">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterDropdown category={category} setCategory={setCategory} />
    </div>

    <ProductList products={filteredProducts} />
  </div>
);
}
export default App;