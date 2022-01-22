import React, {useEffect} from "react";
import './descriptionFilm.css'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteSelectedFilmById, setSelectedFilmById} from "../../Redux/actions";
import {Preloader} from "../Loader/Preloader";
import {Col, Image, Rate, Row} from "antd";
import {darkThemeSelector} from "../../Redux/selectors";

const DescriptionFilm = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const selectedFilm = useSelector(state => state.films.selectedMovie);
    const isLoading = useSelector(state => state.films.isLoading)
    const darkTheme = useSelector(darkThemeSelector);

    useEffect(() => {
        dispatch(setSelectedFilmById(id))
        return ()=>{
            dispatch(deleteSelectedFilmById())
        }
    }, [id])

    return (
        <Row className="movie_top">
            {
                isLoading ? <Preloader/> : selectedFilm && <div>
                    <Row style={{padding: '115px  0 0 32px'}}>
                        <Col  md={10} lg={10} xl={6}>
                            <Image src={selectedFilm.posterUrl} width={250}/>
                        </Col>
                        <Col md={14} lg={14} xl={18}>
                            <p className={darkTheme ? "movie_option movie_optionDark" : "movie_option"}><strong>Название: </strong>{selectedFilm.nameRu}</p>
                            <p className={darkTheme ? "movie_option movie_optionDark" : "movie_option"}><strong>Слоган
                                ограничения: </strong>{selectedFilm.slogan || 'Без слогана'}</p>
                            <p className={darkTheme ? "movie_option movie_optionDark" : "movie_option"}><strong>Продолжительность: </strong>{selectedFilm.filmLength}
                            </p>
                            <p className={darkTheme ? "movie_option movie_optionDark" : "movie_option"}><strong>Страна: </strong>{selectedFilm.countries.map(c =>
                                <span>{c.country} </span>)}</p>
                            <p className={darkTheme ? "movie_option movie_optionDark" : "movie_option"}><strong>Год: </strong>{selectedFilm.year}</p>
                            <p className={darkTheme ? "movie_option movie_optionDark" : "movie_option"}><strong>Жанр: </strong>{selectedFilm.genres.map(g =>
                                <span>{g.genre} </span>)}</p>
                            <p className={darkTheme ? "movie_option movie_optionDark" : "movie_option"}><strong>Возратсные
                                ограничения: </strong>{selectedFilm.ratingAgeLimits}+</p>

                        </Col>
                    </Row>
                    <Row justify={'center'}>
                        <Col span={23}>
                            <p className={darkTheme ? "description descriptionDark" : "description"}>{selectedFilm.description}</p>
                        </Col>
                    </Row>

                </div>

            }
        </Row>
    )
}
export default DescriptionFilm
