
import React, { useState } from "react";
import "./../../App.css"

export const Pagination = ({onPageChanged, pagesCount, currentPage, portionSize}) => {

    console.log("Render Pagination");
    let pages = [];
    if(pagesCount > 20) pagesCount = 20
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    let leftBorderPagination = (portionNumber - 1) * portionSize +1;
    let rightBorderPagination = portionNumber * portionSize;

    return (

        <div className="row pt-5 pb-5">
            <div className="col justify-content-center d-flex">
                <nav aria-label="...">
                    <ul className="pagination pagination-lg">
                        {portionNumber > 1 && <button className="btn btn-danger" onClick={()=>{setPortionNumber(portionNumber-1)}}>&laquo;</button>}
                        {pages
                            .filter(p=> p>=leftBorderPagination && p <=rightBorderPagination)
                            .map((p) => {
                                return <li className={currentPage === p ?'page-item active':'page-item'} key={p}>
                                    <span className={'page-link'} onClick={() => onPageChanged(p)}> {p}</span>
                                </li>
                            })}
                        {portionCount > portionNumber && <button className="btn btn-danger" onClick={()=>{setPortionNumber(portionNumber+1)}}>&raquo;</button>}
                    </ul>
                </nav>
            </div>
        </div>
    )
}
