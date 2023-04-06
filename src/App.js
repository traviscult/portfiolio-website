import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import IndexNavbar from "./components/Nav/Nav";
import Skills from "./components/Skills/Skills";
import Works from "./components/Work/Work";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <IndexNavbar />
      <Header />
      <Skills />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
