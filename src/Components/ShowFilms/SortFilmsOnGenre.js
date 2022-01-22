import React, {memo, useEffect} from "react";
import Films from "../Films/Films";

import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setFilteredParams} from "../../Redux/actions";

const SortFilmsGenres = () => {

    const pagesCount = useSelector(state=>state.films.pagesCount);
    const currentPage = useSelector(state=>state.films.currentPage);
    const films = useSelector(state=>state.films.films);

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
            <Films
                films={films}
                onPageChanged={onPageChanged}
                pagesCount={pagesCount}
                currentPage={currentPage}/>
        </div>
    );
};
export default SortFilmsGenres;
