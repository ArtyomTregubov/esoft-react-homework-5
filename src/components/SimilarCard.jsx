import React from "react";

export default function SimilarCard({item}) {



  return (

    <article className="info__similar-element" key={item.id}>
        <img src={item.src} alt={item.alt} className="info__similar-image"/>
        <span className="info__similar-name">{item.name}</span>
        <span className="info__similar-description">{item.year}, {item.category}</span>
    </article>
    
  );
}