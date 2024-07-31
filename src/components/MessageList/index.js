import React from "react";
import "./MessageList.css";

const MessageList = ({ messages }) => {
  const getInitials = (name) => {
    const nameParts = name.split(" ");
    const initials =
      nameParts.length > 1
        ? nameParts[0][0] + nameParts[nameParts.length - 1][0]
        : nameParts[0][0];
    return initials.toUpperCase();
  };

  return (
    <ul className="message-list">
      {messages.map((msg, index) => (
        <li
          key={index}
          className={`message-item ${msg.type}`}
          style={{
            // display: "flex",
            justifyContent: msg.type === "msg" ? "end" : "start",
          }}
        >
          {msg.type === "reply" && (
            <div className=" d-flex gap-2">
              <div>
                <div className="avatar-circle">{getInitials(msg.user)}</div>
              </div>
              <div>
                <div>
                  <div className="user-details d-flex align-items-center gap-2">
                    <div className="user-name">{msg.user}</div>
                    <div className="timestamp">{msg.time}</div>
                  </div>
                </div>
                <div>
                  <div className="message-bubble ">{msg.text}</div>
                </div>
              </div>
            </div>
          )}
          {msg.type === "msg" && (
            <>
              <div className="msg-time justify-content-end d-flex">
                {msg.time}
              </div>
              <div className="message-bubble-msg ">{msg.text}</div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MessageList;
