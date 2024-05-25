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
const [sameFilms, setSameFilms] = React.useState(null);
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
  
  return (
    
    <div className="App">
      <Routes>

        <Route
          path="/"
            element={
              <>
                <Header/>
                <main>
                
                {firstData && <Movies
                favoriteMovies={favoriteMovies}
                setFavoriteMovies={setFavoriteMovies}
                seeLaterMovies={seeLaterMovies}
                setSeeLaterMovies={setSeeLaterMovies}
                firstData={firstData}
                />}
                </main>
                <Footer/>
                <SideBar 
                favoriteMovies={favoriteMovies}
                setFavoriteMovies={setFavoriteMovies}
                seeLaterMovies={seeLaterMovies}
                setSeeLaterMovies={setSeeLaterMovies}
                />
              </>
            }
        />

        <Route
          path="/search"
            element={
              <>
                <Header/>
                <main>
                {firstData && <Search 
                favoriteMovies={favoriteMovies}
                setFavoriteMovies={setFavoriteMovies}
                seeLaterMovies={seeLaterMovies}
                setSeeLaterMovies={setSeeLaterMovies}
                firstData={firstData}
                />}
                </main>
                <Footer/>
                <SideBar 
                favoriteMovies={favoriteMovies}
                setFavoriteMovies={setFavoriteMovies}
                seeLaterMovies={seeLaterMovies}
                setSeeLaterMovies={setSeeLaterMovies}
                />
              </>
            }
        />

        <Route
          path="/film/:id"
            element={
              <>
                <Header/>
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
                />
              </>
            }
        />

      </Routes>
    </div>
  );
}

export default App;
