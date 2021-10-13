import React from "react";
import './films.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteFavouritesFilms, setFavouritesFilms, setSelectedFilm} from "../../Redux/actions";

const Films = ({films}) => {

    const selectRating = (raiting) => {
        if (raiting >= 9) return "green";
        else if (raiting >= 7) return "yellow"
        else if (raiting >= 5) return "orange";
        else return "red";
    }
    const dispatch = useDispatch();
    const favouriteFilms = useSelector((state) => state.favouriteFilms.favouriteFilms)

    return (
        <div className="row row-cols-1 row-cols-lg-5 g-2 g-lg-3">
            {films.map((f) => (
                <div className="col cardFilms" key={f.filmId}>
                    <div className="card">
                        <NavLink to={`/cinemaInfo/${f.filmId}/`}>
                            <img
                                src={f.posterUrlPreview}
                                className="card-img-top"
                                alt="..."
                            />
                        </NavLink>
                        <div className="card-body">
                            <p className="card-text">{f.nameRu}</p>
                            {favouriteFilms.some((item)=>item.filmId === f.filmId) ?
                                <button onClick={() => dispatch(deleteFavouritesFilms(f))}
                                        className={'btn btn-danger'}>
                                    Удалить из избранного
                                </button> :
                                <button onClick={() => dispatch(setFavouritesFilms(f))} className={'btn btn-success'}>
                                    Добавить в избранное
                                </button>}
                            <div className="rating-area">
                                <label htmlFor="star" >{f.rating !== 'null' ? `${f.rating}`: '0'}</label>
                            </div>
                            <NavLink to={`/cinemaInfo/${f.filmId}/`}>
                                Смотреть онлайн
                            </NavLink>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Films
