import "./App.css";
import About from "./Components/About";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Skills />
      <Portfolio />
      <About />
    </div>
  );
}

export default App;
