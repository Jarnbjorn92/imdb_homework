import React from "react";

const Film = ({name, url}) => {

    return(
        <ul className="film-list">
            <li className="film-list">
                <a className='link' href={url} target='_blank'>{name}</a>
            </li>
        </ul>
    )
}

export default Film;