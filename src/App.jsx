import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Training from "./pages/Training";
import Join from "./pages/Join";
import PageNotFound from "./components/PageNotFound";

import "./App.css";

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
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
