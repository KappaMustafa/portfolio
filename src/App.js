import Header from "./components/header";
import "./app.css";
import Aboutme from "./components/aboutme";
import MyWork from "./components/MyWork";
import Resume from "./components/Resume";

function App() {
  return (
    <div>
      <div>
        <Header />
        <Resume />
        {/* <Aboutme /> */}
        {/* <MyWork /> */}
      </div>
    </div>
  );
}

export default App;
