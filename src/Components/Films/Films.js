import React from "react";
import {useSelector} from "react-redux";
import {Preloader} from "../Loader/Preloader";
import {CardFilm} from "./CardFilm";
import {darkThemeSelector} from "../../Redux/selectors";

const Films = ({films, currentPage, pagesCount, onPageChanged}) => {

   console.log('Render Films')
   const selectRating = (raiting) => {
      if (raiting >= 9) return "green";
      else if (raiting >= 7) return "yellow"
      else if (raiting >= 5) return "orange";
      else return "red";
   }
   if (pagesCount > 20) pagesCount = 20
   const favouriteFilms = useSelector((state) => state.favouriteFilms.favouriteFilms)
   const isLoading = useSelector(state => state.films.isLoading)
   const darkTheme = useSelector(darkThemeSelector);

   if (films.length === 0) {
      return <h2 className={darkTheme ? 'warningText warningTextDark' : 'warningText'}>По вашему запросу ничего не
         найдено!</h2>
   }

   return (
     <section className="cards">
        <div className="cards__row">
           {isLoading ? <Preloader/> :
             films.map((f) => (
               <CardFilm
                 filmId={f.filmId}
                 film={f}
                 nameRu={f.nameRu}
                 posterUrlPreview={f.posterUrlPreview}
                 favouriteFilms={favouriteFilms}
                 rating={f.rating}
                 key={f.filmId}
               />
             ))}
        </div>
     </section>

   )
}
export default Films



