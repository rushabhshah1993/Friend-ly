import React, { useState, useEffect } from 'react';

const Pagination = props => {
    const [noOfPages, setNoOfPages] = useState(0);
    const [currentPage, setCurrentPage] = useState('');
    let pagination = [];
    let friends;

    useEffect(() => {
        if(typeof props.children === 'object' && props.children.length > 0 && !currentPage) {    
            let noOfPages = Math.ceil(props.children.length/props.itemsPerPage);
            setNoOfPages(noOfPages);
            setCurrentPage(1);
        }
    }, [props.children]);

    useEffect(() => {
        if(typeof props.children === 'object' && props.children.length > 0) {
            let noOfPages = Math.ceil(props.children.length/props.itemsPerPage);
            setNoOfPages(noOfPages);
        }
    }, [props.children.length])

    const paginationClickHandler = page => setCurrentPage(page);

    if(typeof props.children === 'object' && noOfPages && noOfPages > 1) {
        friends = props.children.filter((friend, index) => 
            Math.ceil((index+1)/props.itemsPerPage) === currentPage);
        for(let i=1; i<=noOfPages; i++) {
            pagination.push(
                <li key={i} onClick={() => paginationClickHandler(i)}>{i}</li>
            );
        }
    }

    return (
        <>
            {friends}
            <ul>{pagination}</ul>
        </>
    )
    
}

export default Pagination;
