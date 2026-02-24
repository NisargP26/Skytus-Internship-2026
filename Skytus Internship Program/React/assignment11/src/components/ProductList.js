function ProductList({ products }) {
if (products.length === 0) {
  return <p className="no-results">No products found.</p>;
}

  return (
    <ul style={{ marginTop: "20px" }}>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - {product.category}
        </li>
      ))}
    </ul>
  );
}

export default ProductList;