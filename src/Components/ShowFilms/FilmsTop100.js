import React, {memo, useEffect} from "react";
import Films from "../Films/Films";
import { Pagination } from "../Pagination/Pagination";
import {getTop100Films} from "../../Redux/actions";
import {useDispatch, useSelector} from "react-redux";

export const FilmsTop100 = () => {
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
    const MemoPagination = memo(Pagination);
    return (
        <div className="container pt-5">

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

