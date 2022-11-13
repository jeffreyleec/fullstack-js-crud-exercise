import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./routes/Home";
import { UpdateUser } from "./routes/UpdateUser";
import { UsersContextProvider } from "./context/UsersContext";
import "./app.css";
import homeIcon from "./components/assets/homeIcon.png";

function App() {
  return (
    <UsersContextProvider>
      <Router>
        <div className="nav">
          <nav>
            <Link to="/">
              <img className="homeIMG" src={homeIcon} alt="home"></img>
            </Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/update/:id" element={<UpdateUser />} />
          </Routes>
        </div>
      </Router>
    </UsersContextProvider>
  );
}

export default App;
