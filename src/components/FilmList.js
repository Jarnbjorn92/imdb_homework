import React from "react";
import Film from "./Film";


const FilmList = ({films}) => {

    const FilmNodes = films.map((film) => {
        return <Film name={film.name} url={film.url} key={film.id}/>
    })

    return(

        <div>
            {FilmNodes}
        </div>

    )
}

export default FilmList;