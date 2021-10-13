import React, {memo, useEffect} from "react";
import Films from "../Films/Films";
import { Pagination } from "../Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";

export const FavouriteFilms = () => {
    const favouriteFilms = useSelector(state => state.favouriteFilms.favouriteFilms)
    const dispatch = useDispatch();

    const onPageChanged = (pageNumber) => {
        //dispatch(getTop100Films(pageNumber))
    };
    const MemoPagination = memo(Pagination);
    return (
        <div className="container pt-5">

            <Films films={favouriteFilms} />
            {/*<MemoPagination*/}
            {/*    pagesCount={pagesCount}*/}
            {/*    currentPage={currentPage}*/}
            {/*    onPageChanged={onPageChanged}*/}
            {/*    portionSize={5}*/}
            {/*/>*/}
        </div>
    );
};

