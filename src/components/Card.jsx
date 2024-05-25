import React from "react";
import {Link} from "react-router-dom"

export default function Card({item, setFavoriteMovies, favoriteMovies, seeLaterMovies, setSeeLaterMovies,}) {
    
  return (

        <article className="movies__element" key={item.id}>
                <img src={item.src} alt={item.alt} className="movies__element-image"/>
                <div className="movies__description-container">
                    <Link to={`/film/${item.id}`} state={{item}} className="movies__description-name">{item.name}</Link>
                    <span className="movies__description-categories">Жанр : {item.category}</span>
                    <span className="movies__description-text">{item.description}</span>
                    <span className="movies__description-roles">В ролях : {item.actors}</span>
                </div>
                <div className="movies__container">
                    <span className="movies__rating">{item.rating}</span>
                    <button onClick={()=>
                    {setFavoriteMovies([...favoriteMovies, item])
                        }} className="movies__favourites">Добавить в избранное</button>
                    <button onClick={()=>
                    {setSeeLaterMovies([...seeLaterMovies, item])
                        }} className="movies__later">Смотреть позднее</button>
                </div>
         </article>
    )
    
}
    

        