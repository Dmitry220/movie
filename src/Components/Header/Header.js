import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {NavLink} from "react-router-dom";
import {handlerInput} from "../../Redux/actions";
import {Loader} from "../Loader/Loader";

export const Header = () => {
    let history = useHistory();
    const [handler, setHandler] = useState('');
    const isLoading = useSelector(state => state.films.isLoading)
    const dispatch = useDispatch();

    const submitForm = (e, value) => {
        e.preventDefault();
        dispatch(handlerInput(value));
        history.push(`/film/${value}`)
    };

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid d-flex justify-content-center">
                    <ul className="nav nav-pills nav-fill">
                        <li className="nav-item">
                            <NavLink to="/top100" className="btn btn-primary">Топ 100 фильмов</NavLink>
                        </li>
                    </ul>
                    <form
                        className="d-flex p-3"
                        onSubmit={(e) => {
                            submitForm(e, handler);
                        }}
                    >
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Введите название фильма!"
                            value={handler}
                            onChange={(e) => {
                                setHandler(e.target.value);
                            }}
                        />
                        <button
                            className="btn btn-outline-success"
                            type="button"
                            onClick={(e) => submitForm(e, handler)}
                        >
                            {isLoading ? <Loader/> : "Поиск"}
                        </button>
                    </form>
                    <NavLink to="/favourite" className="btn btn-primary">Мои любимые фильмы</NavLink>

                </div>
            </nav>
        </div>
    );
};

