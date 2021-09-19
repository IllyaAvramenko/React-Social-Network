import React from 'react';
import s from './Paginator.module.scss';

const Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => { 

    const pagesCount = Math.ceil(totalUsersCount / pageSize);
 
    const pages = [];   
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
            {
                pages.map(p => {
                        return <span key={p} className={ currentPage === p ? s.selectedPage : '' }
                            onClick={ () => { onPageChanged(p) } }>{p}</span>
                    })
            }
            </div>
        </div>
    )
}

export default Paginator;