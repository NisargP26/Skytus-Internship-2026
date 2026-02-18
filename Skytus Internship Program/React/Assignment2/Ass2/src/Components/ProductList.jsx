import products from "../Data/products";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <section className="products-section">
      <h2>Featured Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
