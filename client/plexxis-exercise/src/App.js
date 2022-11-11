import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./routes/Home";
import { UpdateUser } from "./routes/UpdateUser";
import { UsersContextProvider } from "./context/UsersContext";

function App() {
  return (
    <UsersContextProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
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
