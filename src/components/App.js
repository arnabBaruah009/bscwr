import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from "./";
import {
  Home,
  Events,
  Research,
  Gallery,
  Publications,
  Contact,
} from "../pages";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/research" element={<Research />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/publications" element={<Publications />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
