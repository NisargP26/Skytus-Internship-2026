function BlogCard({ blog, onClick }) {
  return (
    <div className="blog-card" onClick={onClick}>
      <h3>{blog.title}</h3>
      <p>{blog.summary}</p>
      <span className="read-more">Read More →</span>
    </div>
  );
}

export default BlogCard;
