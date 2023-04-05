import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import IndexNavbar from "./components/Nav/Nav";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <IndexNavbar />
      <Header />
      <Skills />
    </div>
  );
}

export default App;
