import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CocktailDetails, Home, Search } from "./pages";




function App() {
  return (   
<Router>
  <Routes>
    <Route path="/"  element={<Home />}></Route>
    <Route path="/search"  element={<Search />}></Route>
    <Route path=":id"  element={<CocktailDetails />}></Route>
  </Routes>
</Router>
  );
}

export default App;
