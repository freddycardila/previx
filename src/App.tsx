import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Simulator from "./pages/Simulator";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/servicios" element={<Simulator />} />
        <Route path="/cursos" element={<Courses />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
