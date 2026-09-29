import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Simulator from "./pages/Simulator";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Advance from "./pages/Advance";
import CookieBanner from './components/CookieBanner';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/servicios" element={<Simulator />} />
        <Route path="/advance" element={<Advance />} />
        <Route path="/cursos" element={<Courses />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer />
      <WhatsAppButton
        phoneNumber="573001234567"
        message="Hola, me gustaría recibir más información sobre los servicios de PREVIX."
        botName="Equipo PREVIX"
        botMessage="¡Hola! 👋 ¿En qué podemos ayudarte hoy?"
        showAfter={3000}
        position="bottom-right"
      />
      <CookieBanner />
    </>
  );
}

export default App;
