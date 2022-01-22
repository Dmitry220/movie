import React from "react";
import { useSelector} from "react-redux";
import {Preloader} from "../Loader/Preloader";
import {CardFilm} from "./CardFilm";
import {Col, Pagination, Row} from 'antd';
import 'antd/dist/antd.css';
import {darkThemeSelector} from "../../Redux/selectors";


const Films = ({films, currentPage, pagesCount, onPageChanged}) => {

    console.log('Render Films')
    const selectRating = (raiting) => {
        if (raiting >= 9) return "green";
        else if (raiting >= 7) return "yellow"
        else if (raiting >= 5) return "orange";
        else return "red";
    }
    if(pagesCount > 20) pagesCount = 20
    const favouriteFilms = useSelector((state) => state.favouriteFilms.favouriteFilms)
    const isLoading = useSelector(state => state.films.isLoading)
    const darkTheme = useSelector(darkThemeSelector);
    if (films.length === 0) {
        return <h2 className={darkTheme ? 'warningText warningTextDark': 'warningText'}>По вашему запросу ничего не найдено!</h2>
    }

    return (
        <div>
            <section className={'grid'} >
            { isLoading ?  <Preloader /> :
                films.map((f) => (
                          // <Col key={f.filmId}  style={{padding: 10}} xs={24} sm={12} md={8} lg={6} xl={4}>
                              <CardFilm
                                  filmId={f.filmId}
                                  film={f}
                                  nameRu={f.nameRu}
                                  posterUrlPreview={f.posterUrlPreview}
                                  favouriteFilms={favouriteFilms}
                                  rating={f.rating}
                              />
                          // </Col>
                      ))}
            </section>
                <Row justify={'center'}>
                    <Col style={{paddingTop: 70, paddingBottom: 70}}>
                        <Pagination total={pagesCount*10} showSizeChanger={false}
                                    defaultCurrent={currentPage} onChange={onPageChanged}/>
                    </Col>
                </Row>

        </div>
    );
}
export default Films
