import React from "react";
import './ListaFilme.css'


function Lista ({title,items}) {
    return(
        <div className="arealistamain">
            <h2>{title}</h2>
            <div className="area-lista">
            {items.results.length > 0 && items.results.map((item, key)=>(
                <div key={key} className="movieRow-lista">    
                    <img  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                </div>
                ))}
            </div>
        </div>
    )
}
export default Lista;