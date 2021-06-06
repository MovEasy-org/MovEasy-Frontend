import React from "react";
import NotifyBar from "./_components/NotifyBar";
import "./Notification.scss";
const Notification = () => {
  const Noti = [
    {
      name: "Mihir Verma",
      typpeofgood: "furniture",
      transporternote: "just hire me!!!",
      bid: "5000",
    },
    {
      name: "yash sharma",
      typpeofgood: "furniture",
      transporternote: "just hire me!!!",
      bid: "5000",
    },
    {
      name: "manvi jain",
      typpeofgood: "furniture",
      transporternote: "just hire me!!!",
      bid: "5000",
    },
    {
      name: "sakshi kashyap",
      typpeofgood: "furniture",
      transporternote: "just hire me!!!",
      bid: "5000",
    },
  ];

  return (
    <>
      <div className="notification">
        <div className="noti-wrapper wrapper">
          <div className="head">
            <h1 className="noti-head">Notifications</h1>
          </div>
          <div className="noti-div">
            {Noti.map((notiItem, index) => (
              <NotifyBar
                key={index}
                name={notiItem.name}
                typpeofgood={notiItem.typpeofgood}
                bid={notiItem.bid}
                transporternote={notiItem.transporternote}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
