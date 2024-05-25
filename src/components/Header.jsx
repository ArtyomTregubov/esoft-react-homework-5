import React from "react";

export default function Header() {

    function openSideBar() {
        document.getElementById("mySidenav").style.display = "block";
    }

  return (

    <header className="header">
          <div className="header__content">
              <div className="header__logo-container">
                  <img src="/images/beholder_logo.png" alt="логотип сайта" className="header__logo"/>
                  <span className="header__text">фильмы и сериалы</span>
              </div>
              <nav className="header__navigation">
                  <a href="/" className="header__navigation-link">Главная</a>
                  <a href="/search" className="header__navigation-link">Поиск</a>
                  <img src="/images/search_icon.png" alt="иконка поиска" className="header__navigation-search"/>
                  <button className="header__sidebar-buttton " onClick={openSideBar}></button>
              </nav>
          </div>
      </header>
    
  );
}