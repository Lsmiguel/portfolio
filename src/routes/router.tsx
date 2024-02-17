
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from '../pages/Homepage/Homepage';
import { About } from '../pages/About/About';


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

