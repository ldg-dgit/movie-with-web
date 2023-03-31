import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Search from "./Routes/Search";
import TV from "./Routes/TV";
import Home from "./Routes/Home";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/tv' element={<TV />}></Route>
        <Route path='/search' element={<Search />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
