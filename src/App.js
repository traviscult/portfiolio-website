import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import IndexNavbar from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <IndexNavbar />
      <Header />
    </div>
  );
}

export default App;
