import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const BlogPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <div className="blog_posts">
      <p>Blog Posts Page</p>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <p>{post.title}</p>
          <Link to={`/blog_posts/${post.id}`}>show more</Link>
        </div>
      ))}
    </div>
  );
};
