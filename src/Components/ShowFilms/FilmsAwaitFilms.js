import React, {useEffect} from "react";
import Films from "../Films/Films";

import {useDispatch, useSelector} from "react-redux";
import {getAwaitFilms} from "../../Redux/actions";

export const FilmsAwaitFilms = () => {
    console.log('Render start page')


    const pagesCount = useSelector(state => state.films.pagesCount);
    const currentPage = useSelector(state => state.films.currentPage);
    const films = useSelector(state => state.films.films);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAwaitFilms(currentPage));
    }, [dispatch, currentPage])

    const onPageChanged = (pageNumber) => {
        dispatch(getAwaitFilms(pageNumber));
    };

    return (
        <div className="container p-5">
            <Films
                films={films}
                onPageChanged={onPageChanged}
                pagesCount={pagesCount}
                currentPage={currentPage}/>
        </div>
    );
};

