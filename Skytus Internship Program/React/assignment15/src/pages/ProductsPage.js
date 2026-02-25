function ProductsPage() {
  const products = [
    { id: 1, name: 'Laptop', stock: 18, price: '$850' },
    { id: 2, name: 'Keyboard', stock: 64, price: '$45' },
    { id: 3, name: 'Mouse', stock: 42, price: '$28' },
    { id: 4, name: 'Headset', stock: 21, price: '$120' },
  ];

  return (
    <section className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Products Table</h5>
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead>
              <tr>
                <th>Product</th>
                <th>Stock</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.stock}</td>
                  <td>{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ProductsPage;
