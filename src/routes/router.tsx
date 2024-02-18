
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from '../pages/Homepage/Homepage';
import { About } from '../pages/About/About';
import { Projects } from "../pages/Projects/projectIndex";
import { PixelArt } from "../pages/PixelArt/pixelndex";
import { Hobby } from "../pages/Hobby/Hobby";


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/pixelart" element={<PixelArt />} />
        <Route path="/hobby" element={<Hobby />} />
      </Routes>
    </BrowserRouter>
  );
};

