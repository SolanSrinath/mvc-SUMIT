// BrowserRouter Routes, route , Link
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Blog from "./components/blog";
import About from "./components/about";
import NoPage from "./components/error";
function App() {
  return (
    <>
      <center>
        <h1>Techinical Blog</h1>
      </center>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;