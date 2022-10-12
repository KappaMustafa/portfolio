import { Routes, Route } from "react-router-dom";
import "./app.css";
import Footer from "./components/Footer/Footer";
import Aboutme from "./components/aboutme/aboutme";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Aboutme />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
