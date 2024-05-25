import React from "react";
import SimilarCard from "./SimilarCard";
import CommentsBlock from "./CommentsBlock";
import { useLocation } from "react-router-dom";

export default function FilmInfo({comments, setComments, sameFilms}) {

    const { state } = useLocation();

    const [filteredCards, setFilteredCards] = React.useState([])

    React.useEffect(() => {
        
        if(sameFilms && state.item && state.item.category.length){
            const categoryArr = state.item.category;
            let filtered = [];
            for(let i = 0; i < categoryArr.length; i++){
                const category = categoryArr[i];
                const fil = sameFilms[category].filter(card => card.name !== state.item.name);
                filtered = [...filtered, ...fil];
            }
            const set = new Set([...filtered])
            setFilteredCards([...Array.from(set)])
        }
        
      }, [sameFilms]);
  

  return (

    <section className="info">
            <div className="info__content">
                <div className="info__container">
                    <div className="info__image-container">
                        <img src={state.item.src} alt={state.item.alt} className="info__image"/>
                        <button className="info__watch-button">Смотреть онлайн</button>
                    </div>
                    <ul className="info__list">
                        <li className="info__list-name">{state.item.name}</li>
                        <li className="info__list-rating">{state.item.rating}</li>
                        <li className="info__list-data">{state.item.year}</li>
                        <li className="info__list-data">{state.item.country}</li>
                        <li className="info__list-data">{state.item.category}</li>
                        <li className="info__list-data">
                            <div className="info__span-container">
                            <span className="info__text">В ролях :</span>
                            <span>{state.item.actors}</span>
                        </div>
                        </li>
                        <li className="info__list-data">Режиссёр : &nbsp;{state.item.director}</li>
                        <li className="info__list-data">{state.item.ageRating}+</li>
                        <li className="info__list-data">
                            <div className="info__span-container">
                                <span className="info__text">Описание : </span> 
                                <span>{state.item.description}</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <h2 className="info__similar-title">Похожие фильмы :</h2>
                <div className="info__similar-grid">

                    {filteredCards.slice(0, 6).map((film) => {
                            return (

                            <SimilarCard
                                item={film}
                            />

                        );
                    })}
                </div>

                <CommentsBlock
                comments={comments}
                setComments={setComments}
                itemId={state.item.id}
                />

            </div>
        </section>
    
  );
}