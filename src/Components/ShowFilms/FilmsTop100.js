import React, {memo, useEffect} from "react";
import Films from "../Films/Films";
import {getTop100Films} from "../../Redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {Preloader} from "../Loader/Preloader";

export const FilmsTop100 = () => {
    console.log('Render Top 100')
    const currentPage = useSelector(state => state.films.currentPage)
    const pagesCount = useSelector(state => state.films.pagesCount)
    const films = useSelector(state => state.films.films)

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTop100Films(currentPage))
    },[currentPage])

    const onPageChanged = (pageNumber) => {
        dispatch(getTop100Films(pageNumber))
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

