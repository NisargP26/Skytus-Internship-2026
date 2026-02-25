function DataListCard({ title, items, renderItem, emptyText }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      {items.length === 0 ? (
        <p className="empty-text">{emptyText}</p>
      ) : (
        <ul className="data-list">
          {items.map((item) => (
            <li key={item.id} className="data-list-item">
              {renderItem(item)}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default DataListCard;
