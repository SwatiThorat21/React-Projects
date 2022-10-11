import "./App.css";
import Info from "./components/Info";
import About from "./components/About";
import Interest from "./components/Interest";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container-1">
      <div className="container-2">
      
          <Info />
          <About />
          <Interest />
          <Footer />
     
      </div>
    </div>
  );
}

export default App;
