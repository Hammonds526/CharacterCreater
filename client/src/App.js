import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
import character from "./data/character";
require("dotenv").config();
import SignUp from "./components/SignUp";
import Login from "./components/Login";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Components
import Tavern from "./components/Tavern";
import MyCharacters from "./components/MyCharacters";
import CharacterMakerScreen from "./components/CharacterMakerScreen";

function App() {
  const [myCharacters, setmyCharacters] = useState([]);

  const [newCharacter, setNewCharacter] = useState({
    name: "No-Name Baggins",
    level: 1,
    race: "human",
    class: "fighter",
    subclass: "",
    abilities: [],
    spells: [],
    feats: [],
    userId: null,
  });

  console.log("newCharacter ", newCharacter);

  const [signIn, setSignIn] = useState(false);
  const [user, setUser] = useState(false);

  // const getMyCharacters = (res) => {
  //   API.getUser(
  //     process.env.REACT_APP_USER_ID || "085189151981561189651985"
  //   ).then((res) => {
  //     if (!res.data === null) {
  //       setmyCharacters(res.data.user.characters);
  //     }
  //   });
  // };

  useEffect(() => {
    // TO DO: REPLACE THIS HASH WITH AUTHENTICATED USER
    // getMyCharacters();
    if (user) {
      API.getUser(user).then((res) => {
        setmyCharacters(res.data !== null ? res.data.characters : []);
      });
    }
  }, [user]);

  return (
    <Router>
      {user ? (
        <div className="container-fluid">
          <div className="col">
            <Switch>
              <Route path="/character-creator">
                <CharacterMakerScreen
                  newCharacter={newCharacter}
                  setNewCharacter={setNewCharacter}
                  character={{ ...character }}
                  user={user}
                  myCharacters={myCharacters}
                  setmyCharacters={setmyCharacters}
                />
              </Route>
            </Switch>
          </div>

          <div className="row mt-4">
            <div className="col-12 col-lg-9 ">
              <div className="row"></div>
              <Tavern
                setNewCharacter={setNewCharacter}
                newCharacter={newCharacter}
              />
            </div>
            <div className="col-12 col-lg-3 p-0">
              <MyCharacters myCharacters={myCharacters} />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              value={signIn}
              className="custom-control-input"
              id="signIn"
              onChange={() => setSignIn(!signIn)}
            />
            <label className="custom-control-label" htmlFor="signIn">
              {signIn ? "Login" : "Sign Up"}
            </label>
          </div>
          {signIn ? (
            <Login setUser={setUser} />
          ) : (
            <SignUp setSignIn={setSignIn} />
          )}
        </>
      )}
    </Router>
  );
}

export default App;
