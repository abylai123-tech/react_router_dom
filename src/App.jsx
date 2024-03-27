import { HomePage } from "./pages/HomePage";
import { Contact } from "./pages/Contact";
import { Gallery } from "./pages/Gallery";
import { NotFound } from "./pages/NotFound";
import { Layout } from "./components/Layout";
import { BlogPosts } from "./pages/BlogPosts";
import { Post } from "./pages/Post";

import { Routes, Route } from "react-router-dom";

import "./App.css";

export const App = () => {
  return (
    <div className="app">
      <div className="pages">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/gallery" element={<Gallery pageName="Галлерея" />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog_posts" element={<BlogPosts />} />
            <Route path="/blog_posts/:id" element={<Post />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};
