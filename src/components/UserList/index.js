import React, { useState } from "react";
import CustomTab from "../../shared/CustomTab";
import CustomSearch from "../../shared/CustomSearch";
import "./UserList.css";
import profilephoto from "../../assets/image/profilephoto.png";

const TAB_LIST = [
  { id: "chats", label: "Chats" },
  { id: "contact", label: "Contact" },
];

const UserList = ({ users, activeUser, setActiveUser }) => {
  const [activeTab, setActiveTab] = useState(TAB_LIST[0]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-list p-4">
      <div className="d-flex">
        <CustomSearch searchTerm={searchTerm} onSearch={setSearchTerm} />
        <button
          className="btn border rounded bg-primary ml-auto ms-2"
          style={{ height: "30px", padding: "1px 8px" }}
        >
          <i className="bi bi-plus text-white"></i>
        </button>
      </div>

      <CustomTab
        tabList={TAB_LIST}
        onClick={(tab) => setActiveTab(tab)}
        style={{ width: "5rem" }}
        activeTab={activeTab}
      />
      <ul>
        {activeTab?.id === "chats" &&
          filteredUsers.map((user, index) => (
            <li
              key={index}
              className={`user-item ${user === activeUser ? "active" : ""}`}
              onClick={() => setActiveUser(user)}
            >
              <div className="user-avatar">
                <img src={profilephoto} alt={user} />
              </div>
              <div className="user-info">
                <div className="d-flex">
                  <div className="user-name">{user}</div>
                  <div className="message-time text-center">35 mins ago</div>
                </div>
                <div className="last-message">Hello sir, there has been...</div>
              </div>
              <div className="user-meta">
                <span className="unread-count">3</span>
              </div>
            </li>
          ))}
        {activeTab?.id === "contact" &&
          filteredUsers.map((user, index) => (
            <li
              key={index}
              className={`user-item ${user === activeUser ? "active" : ""}`}
              onClick={() => setActiveUser(user)}
            >
              <div className="user-avatar">
                <img src={profilephoto} alt={user} />
              </div>
              <div className="user-info">
                <div className="d-flex">
                  <div className="user-name">{user}</div>
                </div>
                <div className="last-message">+91-7436XXXXXX</div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UserList;
