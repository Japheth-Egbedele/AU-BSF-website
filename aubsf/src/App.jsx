import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import NewHere from "./pages/NewHere";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Give from "./pages/Give";
import Events from "./pages/Events";
import NewcomerForm from "./components/NewcomerForm";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-here" element={<NewHere />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/give" element={<Give />} />
        <Route path="/connect" element={<NewcomerForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
