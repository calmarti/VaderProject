import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import "./index.css";
import "./components/Layout/layout.css"
import "./effects.css";
import "./components/Home/home.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
