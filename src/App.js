import './reset.css'
import React, {memo, useEffect, useState} from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Filter from "./Components/Filter/Filter";
import SortFilmsOnGenre from "./Components/ShowFilms/SortFilms";
import {SearchFilms} from "./Components/ShowFilms/SearchFilms";
import {FilmsAwaitFilms} from "./Components/ShowFilms/FilmsAwaitFilms";
import {FilmsTop100} from "./Components/ShowFilms/FilmsTop100";
import DescriptionFilm from "./Components/DescriptionFilm/DescriptionFilm";
import {FavouriteFilms} from "./Components/ShowFilms/FavoutiteFilms";
import {darkThemeSelector} from "./Redux/selectors";
import './Dark.css'
import './App.css'
import {Header} from "./Components/Header/Header";
import {FilterMob} from "./Components/Filter/FilterMob";
import {useSelector} from "react-redux";
import {changeTheme} from "./Redux/actions";


const MemoShowOnSearchFilms = memo(SearchFilms);
const MemoFilmsTop100 = memo(FilmsTop100)
const MemoFilmsAwaitFilms = memo(FilmsAwaitFilms)
const MemoFavouriteFilms = memo(FavouriteFilms)
const MemoDescriptionFilm = memo(DescriptionFilm)
const MemoSortFilmsOnGenre = memo(SortFilmsOnGenre)


const App = () => {

   const [burgerActive, setBurgerActive] = useState(false)
   const [theme, setTheme] = useLocalStorage("theme", 'light');
   const themeToggler = () => theme === 'light' ? setTheme('dark') : setTheme('light')
   const darkTheme = useSelector(darkThemeSelector);
   const [matchesMedia, setMatchesMedia] = useState(window.matchMedia("(min-width: 992px)").matches);
   useEffect(() => {
      const handler = e => setMatchesMedia(e.matches);
      window.matchMedia("(min-width: 992px)").addEventListener('change', handler);
   }, [matchesMedia])

   console.log("Render App")

   const window768 = window.matchMedia('(max-width: 768px)')

   function myFunction(x) {
      if (x.matches) { // If media query matches
        return <FilterMob />
      } else {
        return  <Filter />
      }
   }

   return (
     <Router>

        <Header themeToggler={changeTheme} burgerActive={burgerActive} setBurgerActive={setBurgerActive}/>

        <div className={darkTheme ? "container dark" : "container"}>
           { myFunction(window768)}
             <Switch>
                <Route exact path={"/"} component={MemoFilmsAwaitFilms}/>
                <Route path={"/favourite"} component={MemoFavouriteFilms}/>
                <Route path={"/cinemaInfo/:id"} render={() => <MemoDescriptionFilm/>}/>
                <Route path="/film/:name" component={MemoShowOnSearchFilms}/>
                <Route path="/films/:ratingFrom/:ratingTo/:yearFrom/:yearTo/:genre/:country/:order"
                       component={MemoSortFilmsOnGenre}/>
                <Route path="/top100" render={() => <MemoFilmsTop100/>}/>
             </Switch>
        </div>


     </Router>

   );
};

export default App;


function useLocalStorage(key, initialValue) {
   const [storedValue, setStoredValue] = useState(() => {
      try {
         const item = window.localStorage.getItem(key);
         return item ? JSON.parse(item) : initialValue;
      } catch (error) {
         console.log(error);
         return initialValue;
      }
   });
   const setValue = (value) => {
      try {
         const valueToStore = value instanceof Function ? value(storedValue) : value;
         setStoredValue(valueToStore);
         window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
         console.log(error);
      }
   };
   return [storedValue, setValue];
}