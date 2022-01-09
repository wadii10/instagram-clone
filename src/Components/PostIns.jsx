import React from "react";
import { Avatar, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./PostIns.css"

const PostIns = ({ username, caption, imageUrl, comment }) => {
  const postComment = (event) => {

  }

  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="Wadii"
          src="/static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
      </div>

      <img className="post__image" src={imageUrl} alt="" />
      <div className="post__likeCommentShareSave">
        <div className="like__post">
          <IconButton>
            <i className="fas fa-heart" ></i>
          </IconButton>
        </div>
        <div className="comment__post">
          <IconButton>
            <i className="far fa-comment"></i>
          </IconButton>
        </div>
        <div className="share__post">
          <IconButton>
            <SendIcon />
          </IconButton>
        </div>
        <div className="save__post">
          <IconButton>
            <i className="far fa-bookmark"></i>
          </IconButton>
        </div>
      </div>
      <h4 className="post__text">
        <strong>{username}</strong>{caption}
      </h4>
      <form className="post__commentBox">
        <input
          className="post__input"
          type="text"
          placeholder="Ajouter un commentaire..."
          value={comment}
        />
        <button className="post__button"
          disabled={!comment}
          type="submit"
          onClick={postComment}>Publier</button>
      </form>


    </div>
  );
};

export default PostIns;
