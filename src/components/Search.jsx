import React from "react";
import Card from "./Card";

export default function Search({firstData, setFavoriteMovies, favoriteMovies, seeLaterMovies, setSeeLaterMovies}) {

    const [searchData, setSearchData] = React.useState([])
    const [nameValue, setNameValue] = React.useState('')
    const [category, setCategory] = React.useState("Все категории")

    const filterMovies = (event, category, nameValue) => {
        event.preventDefault();
        
        const searchArr = [...firstData]
        
        if(category === "Все категории" && nameValue === "") 
        {
            resetCategory();
        } 
        
        else if(category ==="Все категории") 

        {
            const searchMovies = searchArr.filter(movie => {
                return movie.name.toLowerCase().includes(nameValue.toLowerCase())
            })
            setSearchData([...searchMovies])
        }
        
        else {

            const searchMoviesName = searchArr.filter(movie => {
                return movie.name.toLowerCase().includes(nameValue.toLowerCase())
            })

            const searchMoviesCategory = searchMoviesName.filter(movie => {
                return movie.category.includes(category + " ")
            })

            setSearchData([...searchMoviesCategory])
        }
    }    

    const resetCategory = () => {
        setSearchData([])
    }

  return (

    <section className="search">
            <div className="search__content">
                <div className="search__container">
                    <form className="search__form">

                        <fieldset className="search__name">
                            <input 
                            type="text" 
                            name="form-question" 
                            className="search__form-input"
                            placeholder="Название фильма" 
                            required 
                            value={nameValue} 
                            minLength="1" 
                            maxLength="500" 
                            id="name"
                            onChange={(event) => {
                                setNameValue(event.target.value);
                            }}
                            />
                            <span className="study__input-error" id="name-error"></span>
                        </fieldset>

                        <p>
                            <select name="films" 
                                    className="search__select"
                                    onChange={(event) => {
                                        setCategory(event.target.value);
                                    }}
                                    >

                                <optgroup label="Категория" className="search__category">
                                    <option defaultValue="r0" className="search__category-value">Выбрать категорию</option>
                                    <option defaultValue="r1" className="search__category-value">Комедия</option>
                                    <option defaultValue="r2" className="search__category-value">Ужасы</option>
                                    <option defaultValue="r3" className="search__category-value">Боевик</option>
                                    <option defaultValue="r4" className="search__category-value">Фантастика</option>
                                    <option defaultValue="r5" className="search__category-value">Триллер</option>
                                    <option defaultValue="r6" className="search__category-value">Мелодрама</option>
                                    <option defaultValue="r7" className="search__category-value">Детектив</option>
                                    <option defaultValue="r8" className="search__category-value">Приключения</option>
                                    <option defaultValue="r9" className="search__category-value">Драма</option>
                                </optgroup>
                            </select>
                        </p>

                        <button onClick={(e) => filterMovies(e, category, nameValue)} className="search__add-button" type="submit">
                            Поиск
                        </button>

                        <img src="./images/search_icon.png" alt="иконка поиска" className="search__button-logo"/>
                    </form>
                </div>
                <div className="movies__grid">

                    {searchData.map((info) => {
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
            </div>
        </section>

  );
}