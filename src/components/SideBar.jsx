import React from "react";
import {Link} from "react-router-dom"

export default function SideBar({
  favoriteMovies, 
  setFavoriteMovies, 
  seeLaterMovies, 
  setSeeLaterMovies,
  isShow,
  onShow
}) {

  function deleteMovie(arr, id, setArr) {
    const moviesWithoudDeleted = arr.filter(item => item.id !== id);
    setArr([...moviesWithoudDeleted]);
  }

  function handleCloseSideBarClick() {
    onShow(false);
  }

  return (

          <div className={ isShow ? `sidebar_opened` : `sidebar`} id="mySidenav">
          <button className="sidebar__close-button" onClick={handleCloseSideBarClick}></button>

          <span className="sidebar__categories">Избранное</span>
          <ul className="sidebar__container">

            {favoriteMovies.map((item)=>{
              return(

                <li className="sidebar__list">
                  <Link 
                    to={`/film/${item.id}`} state={{item}}
                     className="sidebar__movies-name">{item.name}
                  </Link>
                  <button className="sidebar__close-movies" onClick={() => deleteMovie(favoriteMovies, item.id, setFavoriteMovies)}></button>
                </li>
                )
            })}
          
          </ul>

          <span className="sidebar__categories">К просмотру</span>
          <ul className="sidebar__container">

          {seeLaterMovies.map((item)=>{
              return(

                <li className="sidebar__list">
                  <Link 
                    to={`/film/${item.id}`} state={{item}}
                    className="sidebar__movies-name">{item.name}
                  </Link>
                  <button className="sidebar__close-movies" onClick={() => deleteMovie(seeLaterMovies, item.id, setSeeLaterMovies)}></button>
                </li>
                )
            })}
    
          </ul>

    </div>
  );
}