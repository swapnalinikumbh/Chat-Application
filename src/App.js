import ChatApp from "./components/ChatApp";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App container-fluid">
      <Routes>
        <Route path="/" element={<ChatApp />} />
      </Routes>
    </div>
  );
}

export default App;
