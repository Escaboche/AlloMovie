import React from 'react'


const Paginate = (props) => {
    
    const pageLinks = [];
    

    for (let i = 1; i <= props.numberOfPages + 1; i++) {
        

        pageLinks.push(<li  key={i} onClick={() => props.nextPage(i)}> <a href='#'>{i}</a> </li>)
        
    }
    
    return (
        <div className="container">
            <ul className="pagination">
                
                {/* {props.currentPage > 1 ? <li className={`waves-effect`} onClick={() => props.nextPage(props.currentPage - 1)}> <a href='#'>Prec</a> </li> : ''} */}
                { pageLinks }
                {/* {props.currentPage < props.numberPages + 1 ? <li className={`waves-effect`} onClick={() => props.nextPage(props.currentPage + 1)}> <a href='#'>Next</a> </li> : ''} */}

            </ul>
        </div>
    )
}

export default Paginate;
