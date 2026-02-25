import DataListCard from '../components/DataListCard';
import PageState from '../components/PageState';
import { useDashboard } from '../context/DashboardContext';

function ProductsPage() {
  const { products, loading, error } = useDashboard();

  if (loading || error) {
    return <PageState loading={loading} error={error} />;
  }

  return (
    <section className="page-grid single-column">
      <DataListCard
        title="Products"
        items={products}
        emptyText="No products available."
        renderItem={(product) => (
          <div className="item-row">
            <div>
              <h4>{product.title}</h4>
              <p>{product.category}</p>
            </div>
            <strong>${product.price}</strong>
          </div>
        )}
      />
    </section>
  );
}

export default ProductsPage;
