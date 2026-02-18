import { useState } from "react";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";
import "./App.css";

function App() {
  const [blogs] = useState([
    {
      id: 1,
      title: "Understanding React",
      summary: "Learn the basics of React and how components work.",
      content:
        "React is a JavaScript library used to build user interfaces. It uses components and state to manage UI efficiently."
    },
    {
      id: 2,
      title: "JavaScript ES6 Features",
      summary: "An overview of modern JavaScript features.",
      content:
        "ES6 introduced features like arrow functions, destructuring, spread operator, and modules."
    },
    {
      id: 3,
      title: "Why Learn Frontend Development",
      summary: "Reasons why frontend development is important.",
      content:
        "Frontend development focuses on the user interface and user experience of web applications."
    }
  ]);

  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div className="app">
      <h1>My Blog</h1>

      {/* SPA Conditional Rendering */}
      {selectedBlog ? (
        <BlogDetail
          blog={selectedBlog}
          goBack={() => setSelectedBlog(null)}
        />
      ) : (
        <BlogList blogs={blogs} onSelectBlog={setSelectedBlog} />
      )}
    </div>
  );
}

export default App;
