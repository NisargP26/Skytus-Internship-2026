import BlogCard from "./BlogCard";

function BlogList({ blogs, onSelectBlog }) {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onClick={() => onSelectBlog(blog)}
        />
      ))}
    </div>
  );
}

export default BlogList;
