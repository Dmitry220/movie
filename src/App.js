import React, {memo, Suspense, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Filter from "./Components/Filter/Filter";
import SortFilmsOnGenre from "./Components/ShowFilms/SortFilmsOnGenre";
import {ShowOnSearchFilms} from "./Components/ShowFilms/ShowOnSearchFilms";
import {Header} from "./Components/Header/Header";
import {FilmsAwaitFilms} from "./Components/ShowFilms/FilmsAwaitFilms";
import {FilmsTop100} from "./Components/ShowFilms/FilmsTop100";
import DescriptionFilm from "./Components/DescriptionFilm/DescriptionFilm";
import {FavouriteFilms} from "./Components/ShowFilms/FavoutiteFilms";
//const DescriptionFilm = React.lazy(() => import('./Components/DescriptionFilm/DescriptionFilm'))

const MemoShowOnSearchFilms = memo(ShowOnSearchFilms);

const App = () => {

  return (
      <Router>
        <div className="App">
          <Header/>
          <div className="row">
            <div className="col-3">
              <Filter/>
            </div>
            <div className="col-9">
              <Switch>
                <Route exact path={"/"} component={FilmsAwaitFilms}/>
                <Route path={"/favourite"} component={FavouriteFilms}/>
                <Route path={"/cinemaInfo/:id"} render={() => <DescriptionFilm/>}/>
                <Route path="/film/:name" component={MemoShowOnSearchFilms}/>
                <Route path="/films/:filteredParams" component={SortFilmsOnGenre}/>
                <Route path="/top100" render={() => <FilmsTop100/>}/>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
  );
};
export default App;
