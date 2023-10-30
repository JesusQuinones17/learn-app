import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Training from "./pages/Training";
import Join from "./pages/Join";

import "./App.css";

export function NotFound() {
  return <h1>Page not found</h1>;
}

function App() {
  return (
    <main className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/training" element={<Training />} />
          <Route path="/join" element={<Join />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
