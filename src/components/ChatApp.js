import React, { useEffect, useState } from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import UserList from "./UserList";
import "./ChatComponent.css";
import MainCard from "../shared/MainCard";
import profilephoto from "../assets/image/profilephoto.png";

const ChatApp = () => {
  const [messages, setMessages] = useState({});
  const [users, setUsers] = useState([
    "Shaiban Khare",
    "Aamer",
    "Ritik",
    "Swapnali",
    "Pallavi",
    "Sourabh",
    "Kushang",
  ]);
  const [activeUser, setActiveUser] = useState(users[0]);

  const sendMessage = (msg) => {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setMessages((prevMessages) => ({
      ...prevMessages,
      [activeUser]: [
        { type: "msg", text: msg, time: currentTime },
        ...(prevMessages[activeUser] || []),
      ],
    }));
  };

  useEffect(() => {
    const timeData = setTimeout(() => {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      setMessages((prevMessages) => ({
        ...prevMessages,
        [activeUser]: [
          {
            type: "reply",
            user: activeUser,
            text: "Hi",
            time: currentTime,
          },
          ...(prevMessages[activeUser] || []),
        ],
      }));
    }, 1000);
    return () => {
      clearTimeout(timeData);
    };
  }, [activeUser, setMessages]);

  return (
    <MainCard title="Chat Application">
      <div className="row chat-container">
        <div className="col-3">
          <div className="card bg-red">
            <UserList
              users={users}
              activeUser={activeUser}
              setActiveUser={setActiveUser}
            />
          </div>
        </div>
        <div className="col-9">
          <div className="card">
            <div className="chat-content p-4">
              <div className="d-flex align-items-center chat-header justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="user-avatar me-2 mb-2">
                    <img
                      src={profilephoto}
                      alt="user"
                      className="rounded-circle"
                      style={{ width: "40px", height: "40px" }}
                    />
                  </div>
                  <div>
                    <div className="chat-user-name">{activeUser}</div>
                    <div className="text-success online">Online</div>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <i className="bi bi-three-dots-vertical fe-bold" />
                </div>
              </div>

              <MessageList messages={messages[activeUser] || []} />
              <MessageInput sendMessage={sendMessage} />
            </div>
          </div>
        </div>
      </div>
    </MainCard>
  );
};

export default ChatApp;
