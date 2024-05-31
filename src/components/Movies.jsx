import React from "react";
import Card from "./Card";

export default function Movies({
    firstData, 
    setFavoriteMovies, 
    favoriteMovies, 
    seeLaterMovies, 
    setSeeLaterMovies, 
    movieCategories}) {

    const [visibleCards, setVisibleCards] = React.useState(6)
    const [category, setCategory] = React.useState("Выбрать категорию")
    const [filteredMovies, setFilteredMovies] = React.useState([]);
    const [highRating, setHighRating] = React.useState(false);
    const [secondData, setSecondData] = React.useState([])
    
    React.useEffect(() => {
        let arr = category === "Выбрать категорию" ? [...firstData] : [...filteredMovies];
        arr = sortMovies(arr);
        setSecondData([...arr])
      }, [firstData, filteredMovies, category]);

    const handleShowMore = () => {
        setVisibleCards(visibleCards + 6);
      };

    function sortMovies(arr) {
        if(!highRating){
            return arr;
        }
        const arrMovies = [...arr];
        arrMovies.sort((a,b) => b.rating - a.rating)
        return arrMovies
    }

    const filterMovies = (category) => {
        setCategory(category)
        if(category ==="Выбрать категорию") {
            
            return
        } else {
            const filteredMoviesConst = firstData.filter(movie => {
                return movie.category.includes(category + " ");
            })
            
            setFilteredMovies([...filteredMoviesConst])
            
        }
    }

    const resetCategory = () => {
        setSecondData([...firstData])
    }
    
  return (

    <section className="movies">
              <div className="movies__content">
                  <h1 className="movies__title">Популярные Фильмы :</h1>
                  <div className="movies__sort-container">
                      <form className="movies__form">
                          <p>
                               <select name="films" 
                                    className="movies__select"
                                    onChange={(event) => filterMovies(event.target.value) }>
                                  
                                  <optgroup label="Категории фильмов" className="movies__category">

                                  {movieCategories.map((c, i) => {
                                        return <option key={i} defaultValue={c.value} className="movies__category-value">{c.category}</option>
                                    })}

                                  </optgroup>
                              </select>
                          </p>
                      </form>
                      <button className="movies__sort-rating" onClick={() => setHighRating(!highRating)}>С высоким рейтингом</button>
                  </div>
                  <div className="movies__grid">

                {secondData.slice(0, visibleCards).map((info) => {
                    return (
                        
                            <Card 
                                key={info.id}
                                item={info}
                                setFavoriteMovies={setFavoriteMovies}
                                favoriteMovies={favoriteMovies}
                                seeLaterMovies={seeLaterMovies}
                                setSeeLaterMovies={setSeeLaterMovies}
                            />
                        
                    );
                })}

                  </div>
                  <button className="movies__more-button" onClick={handleShowMore}>Ещё</button>
              </div>
          </section>

  );
}