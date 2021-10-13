import React, {memo, useEffect} from "react";
import Films from "../Films/Films";
import {Pagination} from "../Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {getAwaitFilms} from "../../Redux/actions";

export const FilmsAwaitFilms = () => {

    const MemoPagination = memo(Pagination);
    const pagesCount = useSelector(state => state.films.pagesCount);
    const currentPage = useSelector(state => state.films.currentPage);
    const films = useSelector(state => state.films.films);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAwaitFilms(currentPage));
    }, [dispatch, currentPage])

    const onPageChanged = (pageNumber) => {
        getAwaitFilms(pageNumber);
    };

    return (
        <div className="container p-5">
            <Films films={films}/>
            <MemoPagination
                pagesCount={pagesCount}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                portionSize={5}
            />
        </div>
    );
};

