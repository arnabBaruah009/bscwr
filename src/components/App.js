import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from "./";
import { Home, Team, Research, Gallery, Publications } from "../pages";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/research" element={<Research />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/publications" element={<Publications />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
