import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CocktailDetails, Home, Search } from "./pages";
import { useEffect, useState } from "react";




function App() {

  const [searchbar, setSearchbar] = useState("")
/* state */

/*  function  */
function searchbarHandler (event){
const {value} =event.target

 setSearchbar(value)

}

useEffect(() => {
 
console.log(searchbar)
console.log(searchbar)
  
}, [searchbar])


  return (   
<Router>
  <Routes>
    <Route path="/"  element={<Home  searchbar={searchbar} searchbarHandler={searchbarHandler} />}></Route>
    <Route path="/search"  element={<Search searchbar={searchbar} searchbarHandler={searchbarHandler} />}></Route>
    <Route path=":id"  element={<CocktailDetails />}></Route>
  </Routes>
</Router>
  );
}

export default App;
