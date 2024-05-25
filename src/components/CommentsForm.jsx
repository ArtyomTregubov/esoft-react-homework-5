import React from "react";

export default function CommentsForm({comment, handleChange, addComment, setComments, itemId}) {



  return (

    <form className="info__comments-form">

        <textarea className="info__coments-entering" 
                  rows="4" 
                  cols="50" 
                  name="comment" 
                  value={comment}
                  onChange={handleChange}
                  placeholder="Введите комментарий..."> 
        </textarea>

        <input className="info__comments-button" 
                type="button" 
                defaultValue="Отправить"
                onClick={() => addComment(itemId, comment, setComments)}
                />
    </form>
    
  );
}