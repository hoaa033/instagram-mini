import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Routers from "./routes/Routes";

function App() {
  return (
    <Router className="App">
      <Header />
      <Routers />
    </Router>
  );
}

export default App;
