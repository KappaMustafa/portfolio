import React from "react";
import "./mywork.css";
var pokeslap = require("./Pokeslap.gif");
var mydood = require("./mydood.gif");
var fresh = require("./freshtomatoes.gif");

function MyWork() {
  return (
    <div className="full">
      <div className="work-container">
        <h1>SOME OF MY WORK</h1>
      </div>

      <span>
        <h2 className="Poke">Poke-Slap</h2>
      </span>
      <div className="card1">
        <a href="https://poke-slap.herokuapp.com/">
          <img title="Poke-Slap" src={pokeslap} width="100%" alt="" />
        </a>
        <p>
          Poke-Slap is a game that I worked on during my coding bootcamp. To
          play Poke-Slap, you register, pick out what character to play as, then
          you slap away at your opponents! This game uses the Pokemon API.
        </p>
      </div>

      <span>
        <h2 className="mydood">MyDood!</h2>
      </span>
      <div className="card2">
        <a href="https://poke-slap.herokuapp.com/">
          <img title="Poke-Slap" src={mydood} width="100%" alt="" />
        </a>
        <p>
          Poke-Slap is a game that I worked on during my coding bootcamp. To
          play Poke-Slap, you register, pick out what character to play as, then
          you slap away at your opponents! This game uses the Pokemon API.
        </p>
      </div>

      <span>
        <h2 className="Fresh-Tom">Fresh Tomatoes!</h2>
      </span>
      <div className="card3">
        <a href="https://poke-slap.herokuapp.com/">
          <img title="Poke-Slap" src={pokeslap} width="100%" alt="" />
        </a>
        <p>
          Poke-Slap is a game that I worked on during my coding bootcamp. To
          play Poke-Slap, you register, pick out what character to play as, then
          you slap away at your opponents! This game uses the Pokemon API.
        </p>
      </div>
    </div>
  );
}

export default MyWork;
