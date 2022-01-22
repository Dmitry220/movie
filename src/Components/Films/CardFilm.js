import {Link} from "react-router-dom";
import {deleteFavouritesFilms, setFavouritesFilms} from "../../Redux/actions";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import './films.css'
import {Button, Card, Image} from 'antd';
import './../../Dark.css'
import {darkThemeSelector} from "../../Redux/selectors";
import img from './../../assets/img/defaultMovieImage.jpg'
const {Meta} = Card;

export const CardFilm = ({film, filmId, nameRu, posterUrlPreview, favouriteFilms, rating}) => {
    const dispatch = useDispatch();
    const darkTheme = useSelector(darkThemeSelector);
    return (
        <article className="grid-item">
            <div className="image">
               <Link to={`/cinemaInfo/${filmId}`}><img src={posterUrlPreview || img} /></Link>
            </div>
            <div className={darkTheme ? "info infoDark" : "info"}>
                <h2>{nameRu}</h2>
                <div className="info-text">
                          {
                                    favouriteFilms.some((item) => item.filmId === filmId) ?
                                        <Button
                                            danger
                                            block
                                            ghost
                                            type={darkTheme ? "dashed":"primary"}
                                            lime-7
                                            className={'btn'}
                                            onClick={() => dispatch(deleteFavouritesFilms(film))}>
                                            Удалить из избранного
                                        </Button> :
                                        <Button
                                            block
                                            primary
                                            ghost
                                            type={darkTheme ? "dashed":"primary"}
                                            onClick={() => dispatch(setFavouritesFilms(film))}>
                                            Добавить в избранное
                                        </Button>
                               }
                </div>
            </div>
        </article>
    )
}
