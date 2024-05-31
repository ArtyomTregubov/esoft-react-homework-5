import React from "react";
import axios from "axios"; 
import { Route, Routes} from "react-router-dom";
import Header from "./Header";
import Movies from "./Movies";
import Search from "./Search";
import FilmInfo from "./FilmInfo";
import Footer from "./Footer";
import SideBar from "./SideBar";

function App() {

const [firstData, setFirstData] = React.useState([])
const [sameFilms, setSameFilms] = React.useState(null)

const src = "http://localhost:8000/movies"

async function getFilms() {
  const HEADERS = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  
  const firstData = await fetch(src, { method: "GET", ...HEADERS });
   return await firstData.json();
}

React.useEffect(() => {
  (async () => {
    try {
      const data = await getFilms();
      setFirstData(data);
      const similarFilms = {}
      for(let i = 0; i < data.length; i++){
        let film = data[i];
        let categoryArr = film.category;
        for(let i = 0; i < categoryArr.length; i++){
          const category = categoryArr[i];
          if(similarFilms[category]){
            similarFilms[category].push(film);
          } else {
              similarFilms[category] = [film];
          }
        }
    }
    setSameFilms(similarFilms)
    } catch (err) {
      console.log(err);
    }
  })();
}, [firstData, sameFilms]);





  const [favoriteMovies, setFavoriteMovies] = React.useState([]);
  const [seeLaterMovies, setSeeLaterMovies] = React.useState([]);
  const [comments, setComments] = React.useState({});
  const [isShow, onShow] = React.useState(false);

  const [movieCategories, setMovieCategories] = React.useState([
    {
      category: "Выбрать категорию",
      value: "r0",
    },
    {
      category: "Комедия",
      value: "r1",
    },
    {
      category: "Ужасы",
      value: "r2",
    },
    {
      category: "Боевик",
      value: "r3",
    },
    {
      category: "Фантастика",
      value: "r4",
    },
    {
      category: "Триллер",
      value: "r5",
    },
    {
      category: "Мелодрама",
      value: "r6",
    },
    {
      category: "Детектив",
      value: "r7",
    },
    {
      category: "Приключения",
      value: "r8",
    },
    {
      category: "Драма",
      value: "r9",
    },
  ]);

  
  return (
    
    <div className="App">
      <Routes>

        <Route
          path="/"
            element={
              <>
                <Header
                isShow={isShow}
                onShow={onShow}
                />
                <main>
                
                {firstData && <Movies
                favoriteMovies={favoriteMovies}
                setFavoriteMovies={setFavoriteMovies}
                seeLaterMovies={seeLaterMovies}
                setSeeLaterMovies={setSeeLaterMovies}
                firstData={firstData}
                movieCategories={movieCategories}
                />}
                </main>
                <Footer/>
                <SideBar 
                favoriteMovies={favoriteMovies}
                setFavoriteMovies={setFavoriteMovies}
                seeLaterMovies={seeLaterMovies}
                setSeeLaterMovies={setSeeLaterMovies}
                isShow={isShow}
                onShow={onShow}
                />
              </>
            }
        />

        <Route
          path="/search"
            element={
              <>
                <Header
                isShow={isShow}
                onShow={onShow}
                />
                <main>
                {firstData && <Search 
                favoriteMovies={favoriteMovies}
                setFavoriteMovies={setFavoriteMovies}
                seeLaterMovies={seeLaterMovies}
                setSeeLaterMovies={setSeeLaterMovies}
                firstData={firstData}
                movieCategories={movieCategories}
                />}
                </main>
                <Footer/>
                <SideBar 
                favoriteMovies={favoriteMovies}
                setFavoriteMovies={setFavoriteMovies}
                seeLaterMovies={seeLaterMovies}
                setSeeLaterMovies={setSeeLaterMovies}
                isShow={isShow}
                onShow={onShow}
                />
              </>
            }
        />

        <Route
          path="/film/:id"
            element={
              <>
                <Header
                isShow={isShow}
                onShow={onShow}
                />
                <main>
                <FilmInfo 
                comments={comments}
                setComments={setComments}
                sameFilms={sameFilms}
                setSameFilms={setSameFilms}
                />   
                </main>
                <Footer/>
                <SideBar 
                favoriteMovies={favoriteMovies}
                setFavoriteMovies={setFavoriteMovies}
                seeLaterMovies={seeLaterMovies}
                setSeeLaterMovies={setSeeLaterMovies}
                isShow={isShow}
                onShow={onShow}
                />
              </>
            }
        />

      </Routes>
    </div>
  );
}

export default App;
