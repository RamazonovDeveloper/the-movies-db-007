import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import "./App.css";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<h2>Movies page</h2>} />
          <Route
            path="/movie/now-playing"
            element={<h2>Movies page now playing</h2>}
          />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
