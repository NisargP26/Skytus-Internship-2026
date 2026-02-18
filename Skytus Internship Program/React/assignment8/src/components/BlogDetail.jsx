function BlogDetail({ blog, goBack }) {
  return (
    <div className="blog-detail">
      <button className="back-btn" onClick={goBack}>
        ← Back
      </button>

      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogDetail;
