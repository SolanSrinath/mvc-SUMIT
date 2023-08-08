import { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
const Home = () => {
  const [fdata, setFdata] = useState({});
  let [bdata, setBdata] = useState("");

  const ChangeHandler = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    setFdata({ ...fdata, [name]: val });
  };

  const SubmitHandler = (e) => {
    e.preventDefault(); // submit data one time only
    bdata = { ...fdata };
    console.log(bdata);
    setBdata(fdata);
    // setFdata({ title: "", content: "", author: "" });
    Axios.post("http://localhost:4000/blogfd", { bdata })
      .then((res) => {
        if (res.status === 201) {
          alert("Data submitted successfully");
        }
        setFdata({ name: "", email: "", mobile: "" });
      })
      .catch((err) => {
        console.log(err);
        alert("Error submtting data");
        setFdata({ title: "", content: "", author: "" });
      });
  };

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

      <h1> Dashboard </h1>
      <hr></hr>
      <form onSubmit={SubmitHandler}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          onChange={ChangeHandler}
          value={fdata.title || ""}
        />
        <br></br>
        <label>Content</label>
        <input
          type="text"
          name="content"
          onChange={ChangeHandler}
          value={fdata.content || ""}
        />
        <br></br>
        <label>Author</label>
        <input
          type="text"
          name="author"
          onChange={ChangeHandler}
          value={fdata.author || ""}
        />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default Home;
