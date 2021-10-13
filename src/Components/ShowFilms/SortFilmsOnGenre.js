import React, {memo, useEffect} from "react";
import Films from "../Films/Films";
import { Preloader } from "../Loader/Preloader";
import { Pagination } from "../Pagination/Pagination";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setFilteredParams} from "../../Redux/actions";

const SortFilmsGenres = () => {

    const pagesCount = useSelector(state=>state.films.pagesCount);
    const currentPage = useSelector(state=>state.films.currentPage);
    const isLoading = useSelector(state=>state.films.isLoading);
    const films = useSelector(state=>state.films.films);
    const MemoPagination = memo(Pagination);
    const {filteredParams} = useParams();
    const dispatch = useDispatch()

    useEffect(()=>{
        console.log("Screening of films by genre ")
        dispatch(setFilteredParams(filteredParams))
    },[filteredParams])

    const onPageChanged = (pageNumber) => {
        dispatch(setFilteredParams(filteredParams, pageNumber));
    };

    return (
        <div className="container pt-5">
            {isLoading ? <Preloader /> : null}
            <Films films={films} />
            <MemoPagination
                pagesCount={pagesCount}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                portionSize={5}
            />
        </div>
    );
};
export default SortFilmsGenres;
