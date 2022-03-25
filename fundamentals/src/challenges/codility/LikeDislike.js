import cx from "classnames";
import React, { Component } from "react";

export default class LikeDislike extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: { value: 100, activated: false },
      dislike: { value: 25, activated: false },
    };

    this.handleLikeButton = this.handleLikeButton.bind(this);
    this.handleDislikeButton = this.handleDislikeButton.bind(this);
  }

  handleLikeButton() {
    this.setState(
      (prevState) =>
        (prevState.likes = {
          value: prevState.likes.activated
            ? prevState.likes.value - 1
            : prevState.likes.value + 1,
          activated: !prevState.likes.activated,
        })
    );
  }

  handleDislikeButton() {
    this.setState(
      (prevState) =>
        (prevState.dislike = {
          value: prevState.dislike.activated
            ? prevState.dislike.value - 1
            : prevState.dislike.value + 1,
          activated: !prevState.dislike.activated,
        })
    );
  }

  render() {
    const { likes, dislike } = this.state;

    return (
      <>
        <div>
          <button
            className={likes.activated ? "like-button liked" : "like-button"}
            onClick={this.handleLikeButton}
          >
            Like | <span className="likes-counter">{likes.value}</span>
          </button>
          <button
            className={
              dislike.activated ? "dislike-button disliked" : "dislike-button"
            }
            onClick={this.handleDislikeButton}
          >
            Dislike | <span className="dislikes-counter">{dislike.value}</span>
          </button>
        </div>
        <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}</style>
      </>
    );
  }
}
