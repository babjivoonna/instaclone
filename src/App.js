import "./App.scss";
import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from './components/Posts/Posts';
import Feed from './components/Feed/Feed';
import Chat from './components/chats/Chat';
import Profile from "./components/profile/Profile";
import SignIn from "./components/profile/SignIn/SignIn";
import SignUp from "./components/profile/SignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <Header />
        <main className="all-routes">
          <Routes>
            <Route index Component={Posts} />
            <Route path="/posts" Component={Posts} />
            <Route path="/feed" Component={Feed} />
            <Route path="/chats" Component={Chat} />
            <Route path="/profile" Component={Profile} />
            <Route path="/signin" Component={SignIn} />
            <Route path="/signup" Component={SignUp} />
          </Routes>
        </main>
      </main>
    </BrowserRouter>
  );
}

export default App;
