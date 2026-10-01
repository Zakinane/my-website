import "./App.css";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Work from "./pages/Works.jsx";
import PaddingPage from "./components/PaddingPage.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <PaddingPage size={30} />
      <Work />
    </div>
  );
}

export default App;
