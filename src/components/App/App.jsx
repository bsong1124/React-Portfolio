import "./App.css";

// IMPORT COMPONENTS
import Header from "../Header";
import Footer from "../Footer";
import { Route, Routes } from "react-router-dom";

// IMPORT PAGES
import Home from "../../pages/Home";
import About from "../../pages/About";
import Projects from "../../pages/Projects";

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
