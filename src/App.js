import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Recipes from './pages/Recipes';
import Favorites from './pages/Favorites';
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Recipes</h1>
        <NavBar />
        <Routes>
          <Route exact path="/"/>
          <Route path="/recipes" element={<Recipes/>} />
          <Route path="/favorites" element={<Favorites/>} />
        </Routes>       
      </div>
    </Router>
  );
}

export default App;
