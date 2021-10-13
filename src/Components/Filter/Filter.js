import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getGenreAndCountries} from "../../Redux/actions";
import {NavLink} from "react-router-dom";
import style from './Filter.module.css'
import Slider from 'react-input-slider';

const Filter = () => {

    const dispatch = useDispatch()
    const genres = useSelector((state) => state.filter.genres);
    const countries = useSelector((state) => state.filter.countries);
    const [value, setValue] = useState('');
    const [listCountries, setListCountries] = useState([]);
    const [filteredParams, setFilteredParams] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('')
    const [selectedCountry, setSelectedCountry] = useState('')
    const [selectedYearFrom, setSelectedYearFrom] = useState({x:1880})
    const [selectedYearTo, setSelectedYearTo] = useState({x:2021})
    const [selectedRatingFrom, setSelectedRatingFrom] = useState({x:0})
    const [selectedRatingTo, setSelectedRatingTo] = useState({x:10})
    const [order, setOrder] = useState('order=YEAR')

    useEffect(() => {
        setListCountries(countries);
    }, [countries])

    useEffect(() => {
        dispatch(getGenreAndCountries());
    }, [dispatch]);

    useEffect(() => {
        const filterArray = countries.filter((c) => {
            if (c.country.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) === 0) return c
        })
        setListCountries(filterArray);
    }, [value])

    useEffect(()=>{
        setFilteredParams(prevState => [...prevState, order, selectedGenre, selectedCountry, `&yearFrom=${selectedYearFrom.x}`, `&yearTo=${selectedYearTo.x}`,
            `&ratingFrom=${selectedRatingFrom.x}`, `&ratingTo=${selectedRatingTo.x}` ]);
        return ()=>{
            setFilteredParams([]);
        }
    }, [selectedGenre, selectedCountry, selectedYearFrom.x, selectedYearTo.x, selectedRatingFrom.x, selectedRatingTo.x, order])

    return (
        <div className="container-fluid pt-5">
            <div className="accordion dark" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Жанры
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                         data-bs-parent="#accordionExample">
                        <ul className={`list-group ${style.filter_block}`}>
                            {genres.map((g) => {
                                return (
                                    <li
                                        className={`list-group-item ${selectedGenre===`&genre=${g.id}` && 'active'}`}
                                        style={{cursor: 'pointer'}}
                                        key={g.id}
                                        onClick={(e)=>setSelectedGenre(`&genre=${g.id}`)}
                                    >
                                        {g.genre}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Страны
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                         data-bs-parent="#accordionExample">
                        <ul className={`list-group ${style.filter_block}`}>
                            <input type="text" value={value} placeholder={'Название страны'}
                                   onChange={(e) => setValue(e.target.value)}/>
                            {!listCountries.length && <li className="list-group-item">{"Ничего не найдено"}</li>}
                            {listCountries.map((c) => {
                                return (
                                    <li
                                        className={`list-group-item ${selectedCountry===`&country=${c.id}` && 'active'}`}
                                        key={c.id}
                                        style={{cursor: 'pointer'}}
                                        onClick={(e)=>setSelectedCountry(`&country=${c.id}`)}
                                    >
                                        {c.country}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Год
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div>От {selectedYearFrom.x}</div>
                            <div>
                                <Slider axis="x" x={selectedYearFrom.x} xmin={1880} xmax={2021} onChange={({x})=>setSelectedYearFrom(prev=>({...prev, x}))}/>
                            </div>
                            <div>До {selectedYearTo.x}</div>
                            <div>
                                <Slider axis="x" x={selectedYearTo.x} xmin={selectedYearFrom.x} xmax={2021} onChange={({x})=>setSelectedYearTo(prev=>({...prev, x}))}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFive" aria-expanded="false" aria-controls="headingFive">
                            Рейтинг
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <div>От {selectedRatingFrom.x}</div>
                            <div>
                                <Slider axis="x" x={selectedRatingFrom.x} xmin={0} xmax={10} onChange={({x})=>setSelectedRatingFrom(prev=>({...prev, x}))}/>
                            </div>
                            <div>До {selectedRatingTo.x}</div>
                            <div>
                                <Slider axis="x" x={selectedRatingTo.x} xmin={selectedRatingFrom.x} xmax={10} onChange={({x})=>setSelectedRatingTo(prev=>({...prev, x}))}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseSix" aria-expanded="false" aria-controls="headingSix">
                            Сортировка
                        </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ul className={'list-group'}>
                                <li
                                    className={`list-group-item ${order==='order=RATING' && 'active'}`}
                                    style={{cursor: 'pointer'}}
                                    onClick={(e)=>setOrder(`order=RATING`)}
                                >Отсортировать по рейтингу</li>
                                <li
                                    className={`list-group-item ${order==='order=YEAR' && 'active'}`}
                                    style={{cursor: 'pointer'}}
                                    onClick={(e)=>setOrder(`order=YEAR`)}
                                >Отсортировать по году</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <NavLink to={`/films/${filteredParams.join('')}`} className={'btn btn-outline-primary p-2 justify-content-center d-flex text-white border-white'}>
                    Отфильтровать
                </NavLink>

            </div>
        </div>
    );
};

export default Filter;
