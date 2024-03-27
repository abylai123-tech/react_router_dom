import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Post = () => {
  const { id } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, []);
  return (
    <div>
      <Link to="/blog_posts">return to BlogPosts Page</Link>
      <h1>Post</h1>
      <h1>Title: {post?.title}</h1>
      <p>Body: {post?.body}</p>
    </div>
  );
};
