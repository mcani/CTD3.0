import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./pages/Movie";
import Movies from "./pages/Movies";
import Ship from "./pages/Ship";
import Ships from "./pages/Ships";

import Basic from "./layout/Basic";
import NotFound from "./errors/NotFound";
import ServerError from "./errors/ServerError";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Basic />}>
          <Route index element={<Home />} />
          <Route path="ships" element={<Ships />} />
          <Route path="ship/:id" element={<Ship />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="movies" element={<Movies />} />
          <Route path="error" element={<ServerError />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}