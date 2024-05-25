import React from "react";
import CommentsForm from "./CommentsForm";

export default function CommentsBlock({comments, setComments, itemId}) {

    const [comment, setComment] = React.useState('');

    
    const addComment = (itemId, newComment, setComments) => {
        
        if (comments[itemId]) {
            
            comments[itemId] = [...comments[itemId], newComment]
        } else {
            
            comments[itemId] = [newComment];
        }
    
        setComments(Object.assign({}, comments));
    };


    const handleChange = (e) => {
        setComment(e.target.value);
    };


  return (

    <div className="info__comments">
    <h2 className="info__comments-title">Коментарии :</h2>
    
    <CommentsForm
    comment={comment}
    handleChange={handleChange}
    addComment={addComment}
    setComments={setComments}
    itemId={itemId}
    setComment={setComment}
    />
        {comments[itemId] ? comments[itemId].map((c, id) => (

            <div className="info__comments-container">
                <div className="info__comments-user">
                    <img src="/images/user_icon.svg" alt="иконка пользователя" className="info__user-icon"/>
                    <div className="info__user-description">
                        <span className="info__user-name">Анонимный пользователь</span>
                        <span className="info__comments-date">01.05.2024</span>
                    </div>
                </div>
                <span className="info__comments-text" key={id}>{c}</span>
             </div>
        )) : "" } 
</div>
    
  );
}