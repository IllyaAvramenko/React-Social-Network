import React, { useState } from 'react';
import s from './Paginator.module.scss';
// import cn from 'classnames';

const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => { 

    const pagesCount = Math.ceil(totalItemsCount / pageSize);
 
    const pages = [];   
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;


    return (
        <div className={s.paginator}>
            {
                portionNumber > 1 && <button className={s.btn} onClick={ () => {setPortionNumber(portionNumber - 1)} } >Prev</button>
            }
            {
                pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                        return <span key={p} className={  currentPage === p ? s.selectedPage : s.page }
                            onClick={ () => { onPageChanged(p) } }>{p}</span>
                    })
            }
            {
                (portionCount > portionNumber)  && 
                    <button className={s.btn} onClick={ () => {setPortionNumber(portionNumber + 1)} } >Next</button>
            }
        </div>
    )
}

export default Paginator;