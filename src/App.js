import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CocktailDetails, Home, Search } from "./pages";
import { useEffect, useState } from "react";




function App() {

  const [searchbar, setSearchbar] = useState("")
  const [lastPage, setLastPage] = useState("")
/* state */

/*  function  */
function searchbarHandler (event){
const {value} =event.target

 setSearchbar(value)

}




  return (   
<Router>
  <Routes>
    <Route path="/"  element={<Home  searchbar={searchbar} searchbarHandler={searchbarHandler} setLastPage={setLastPage} />}></Route>
    <Route path="/search"  element={<Search searchbar={searchbar} searchbarHandler={searchbarHandler} setLastPage={setLastPage}  />}></Route>
    <Route path=":id"  element={<CocktailDetails lastPage={lastPage} />}></Route>
  </Routes>
</Router>
  );
}

export default App;
