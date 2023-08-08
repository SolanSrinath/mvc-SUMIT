import { Link } from "react-router-dom";
const error = () => {
  return (
    <>
      <ul>
        <li>
          <Link to={{ pathname: "/" }}>Home</Link>
        </li>
        <li>
          <Link to={{ pathname: "/blog" }}>My Blogs</Link>
        </li>
        <li>
          <Link to={{ pathname: "/about" }}>About Us</Link>
        </li>
      </ul>

      <h1>404 page Not found</h1>
    </>
  );
};
export default error;
