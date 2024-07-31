import React, { useState } from "react";
import Picker from "emoji-picker-react";
import "./MessageInput.css";

const MessageInput = ({ sendMessage }) => {
  const [input, setInput] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const handleEmojiClick = (event) => {
    setInput(input + event.emoji);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <form className="message-input-form" onSubmit={handleSubmit}>
      <button
        type="button"
        className="emoji-btn ms-1 mb-1"
        onClick={() => setShowPicker(!showPicker)}
      >
        <i className="bi bi-emoji-smile" />
      </button>
      {showPicker && (
        <div className="emoji-picker">
          <Picker onEmojiClick={handleEmojiClick} />
        </div>
      )}
      <input
        type="text"
        className="message-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message here......"
      />
      <button type="button" className="image-btn">
        <i className="bi bi-image" />
      </button>
      <button type="button" className="image-btn me-2 ms-2">
        <i className="bi bi-link-45deg" />
      </button>
      <button type="submit" className="send-button">
        <i className="bi bi-send" />
      </button>
    </form>
  );
};

export default MessageInput;
