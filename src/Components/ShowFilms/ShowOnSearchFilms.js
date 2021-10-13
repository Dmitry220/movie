import Films from "../Films/Films";
import {getFilmsFromSearch} from "../../Redux/actions";
import { useDispatch, useSelector} from "react-redux";
import { Pagination } from "../Pagination/Pagination";
import {memo, useEffect} from "react";
import {useParams} from "react-router-dom";

export const ShowOnSearchFilms = (props) => {

    const {name} = useParams();
    const films = useSelector(state=> state.films.films)
    const pagesCount = useSelector(state=> state.films.pagesCount)
    const currentPage = useSelector(state=> state.films.currentPage)
    const searchTest = useSelector(state=> state.header.searchTest);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getFilmsFromSearch(name, 1));
    },[dispatch,name])

    let onPageChanged = (pageNumber) => {
        dispatch(getFilmsFromSearch(searchTest, pageNumber));
    };
    const MemoPagination = memo(Pagination);
    console.log('Render Show Films By Search');
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

