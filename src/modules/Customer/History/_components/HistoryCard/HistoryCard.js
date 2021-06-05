import React from "react";
import PostStatus from "../PostStatus/PostStatus";
import "./HistoryCard.scss"
const HistoryCard = ({ status, from, to, date, time }) => {
  return (
    <>
      <div className="history-card-container">
        <div className="history-card-content status-align">
          <p className="para-label ">Status :</p>
          <div>
            {status ? (
              <PostStatus poststatus={status} />
            ) : (
              <PostStatus poststatus={status} />
            )}
          </div>
        </div>
        <div className="history-card-content">
          <p className="para-label">From:</p> <p className="history-content">{from}</p>
        </div>
        <div className="history-card-content">
          <p className="para-label">To:</p> <p className="history-content">{to}</p>
        </div>
        <div className="history-card-content">
          <p className="para-label">Date:</p> <p className="history-content">{date}</p>
        </div>
        <div className="history-card-content">
          <p className="para-label">Time:</p> <p className="history-content">{time}</p>
        </div>
      </div>
    </>
  );
};

export default HistoryCard;
