function FilterDropdown({ category, setCategory }) {
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      style={{ padding: "8px" }}
    >
      <option value="All">All</option>
      <option value="Electronics">Electronics</option>
      <option value="Clothing">Clothing</option>
      <option value="Footwear">Footwear</option>
    </select>
  );
}

export default FilterDropdown;