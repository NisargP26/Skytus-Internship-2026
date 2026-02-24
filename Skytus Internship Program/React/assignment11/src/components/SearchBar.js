import { useRef, useEffect } from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // auto focus on load
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Search product..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ padding: "8px", marginRight: "10px" }}
    />
  );
}

export default SearchBar;