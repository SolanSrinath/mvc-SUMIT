import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./blog.css";
const Blog = () => {
  const [blogdata, setBlogdata] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:4000/blogdata")
      .then((res) => {
        setBlogdata(res.data);
        console.log(blogdata);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);
  let i = 0;

  //******************delete db data */
  const deleteHandler = (e) => {
    // Axios.delete("http://localhost:4000/blogdata", { id: e })
    Axios.delete(`http://localhost:4000/blogdata/${e}`)
      .then((res) => {
        let ack1 = res.data.msg;
        if (ack1 === "success") {
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //******************update db data */
  const updateHandler = (e) => {
    //alert("update call to" + e);
    console.log(e);
    // Axios.put("http://localhost:4000/bdupdate", { id: e }).then((res) => {
    Axios.put(`http://localhost:4000/bdupdate/${e}`).then((res) => {
      let ack = res.data;
      if (ack === "success") {
        //setNewffname("update successful");
      } else {
        //setNewffname("Data not updated ");
      }
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
      <h1>My blog page </h1>
      <hr></hr>

      <div>
        <table>
          <thead>
            <tr>
              <th>sl. No</th>
              <th>title</th>
              <th>content</th>
              <th>author</th>
              <th>action</th>
            </tr>
          </thead>
          {blogdata.map((sdata) => {
            ++i;
            return (
              <tbody key={sdata._id}>
                <tr>
                  <td>{i} </td>
                  <td>{sdata.title}</td>
                  <td>{sdata.content}</td>
                  <td>{sdata.author}</td>
                  <td>
                    <button
                      type="submit"
                      onClick={() => deleteHandler(sdata._id)}
                    >
                      delete
                    </button>
                    --
                    <button
                      type="submit"
                      onClick={() => updateHandler(sdata._id)}
                    >
                      update
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
};
export default Blog;
