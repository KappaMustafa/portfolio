import { Routes, Route } from "react-router-dom";
import "./app.css";
import Header from "./components/header/header";
import Footer from "./components/Footer/Footer";
import Aboutme from "./components/aboutme/aboutme";
import MyWork from "./components/myWork/MyWork";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Aboutme />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/My-Work" element={<MyWork />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
