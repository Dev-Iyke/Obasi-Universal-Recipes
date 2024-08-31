import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Recipes from './pages/Recipes';
import Favorites from './pages/Favorites';
import NavBar from "./components/NavBar";
import RecipeDetails from "./pages/RecipeDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to Obasi Universal Recipes</h1>
        <p>Your Gateway to Meals you have never imagined!</p>
        <NavBar />
        <Routes>
          <Route exact path="/"/>
          <Route path="/recipes" element={<Recipes/>} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/recipes/:id" element={<RecipeDetails/>} />
        </Routes>       
      </div>
    </Router>
  );
}

export default App;
