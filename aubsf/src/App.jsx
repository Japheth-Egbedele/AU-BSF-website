import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer"
import Home from "./pages/home";
import NewHere from "./pages/newHere";
import WhoWeAre from "./pages/about";
import Gallery from "./pages/gallery";
import Give from "./pages/give";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-here" element={<NewHere />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/give" element={<Give />} />
      </Routes>
    </>
  );
}
