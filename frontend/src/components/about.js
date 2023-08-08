import { Link } from "react-router-dom";
const about = () => {
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
      <h1>This is my about page </h1>
    </>
  );
};
export default about;
