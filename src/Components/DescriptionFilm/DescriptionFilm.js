import React, {useEffect} from "react";
import './descriptionFilm.css'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteSelectedFilmById, setSelectedFilmById} from "../../Redux/actions";

const DescriptionFilm = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const selectedFilm = useSelector(state => state.films.selectedMovie);


    useEffect(() => {
        dispatch(setSelectedFilmById(id))
        return ()=>{
            dispatch(deleteSelectedFilmById())
        }
    }, [id])

    return (
        <div className="movie_top">
            {
                selectedFilm ? <div>
                        <div className="col-md-9 movie_box m-4">
                            <div className="grid images_3_of_2">
                                <div className="movie_image">
                                    <img src={selectedFilm.posterUrl} className="img-responsive" alt=""/>
                                </div>

                            </div>
                            <div className="desc1 span_3_of_2">
                                <p className="movie_option"><strong>Название: </strong>{selectedFilm.nameRu}</p>
                                <p className="movie_option"><strong>Слоган
                                    ограничения: </strong>{ selectedFilm.slogan || 'Без слогана'}</p>
                                <p className="movie_option"><strong>Продолжительность: </strong>{ selectedFilm.filmLength}
                                </p>
                                <p className="movie_option"><strong>Страна: </strong>{ selectedFilm.countries.map(c =>
                                    <span>{c.country} </span>)}</p>
                                <p className="movie_option"><strong>Год: </strong>{selectedFilm.year}</p>
                                <p className="movie_option"><strong>Жанр: </strong>{selectedFilm.genres.map(g =>
                                    <span>{g.genre} </span>)}</p>
                                <p className="movie_option"><strong>Возратсные
                                    ограничения: </strong>{selectedFilm.ratingAgeLimits}+</p>

                            </div>
                        </div>
                        <p className="m_4 description">{selectedFilm.description}</p>
                    </div>

                    : ''}
        </div>
    )
}
export default DescriptionFilm
