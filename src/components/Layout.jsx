import { Outlet, NavLink } from "react-router-dom";

const setActive = ({ isActive }) => (isActive ? "active-link" : "");

export const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/" className={setActive}>
          HomePage
        </NavLink>
        <NavLink to="/gallery" className={setActive}>
          Gallery
        </NavLink>
        <NavLink to="/contact" className={setActive}>
          Contact
        </NavLink>
        <NavLink to="/blog_posts" className={setActive}>
          Blog Posts
        </NavLink>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>This is Footer content. 2024</p>
      </footer>
    </>
  );
};
