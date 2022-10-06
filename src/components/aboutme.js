import React from "react";
import "./mywork.css";
var pokeslap = require("./Pokeslap.gif");
var mydood = require("./mydood.gif");
var fresh = require("./freshtomatoes.gif");
function Aboutme() {
  return (
    <div>
      <div className="about-container">
        <h2>A Quick Introduction:</h2>
        <p>
          My name is Mustafa Aboghalyoun, I am a first generation
          Syrian-American. I spend most of my time learing how to improve my
          develepoment skills, as well as learning new coding langauges. I am
          passionate about games and I plan on learning how to program and
          develop games in the near future. I recently graduated from the Web
          develepoment bootcamp from the University Of Minnesota.
        </p>
      </div>
      <div className="full">
        <div className="work-container">
          <h1>Some Of My Work</h1>
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
            play Poke-Slap, you register, pick out what character to play as,
            then you slap away at your opponents! This game uses the Pokemon
            API.
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
            MyDood is a social media clone. It starts the user with a drawing
            canvas where they draw the WOTD and post it for their friends to
            see. This app was made in react, it also has user authentication and
            it uses NoSQL for storing data.
          </p>
        </div>

        <span>
          <h2 className="Fresh-Tom">Fresh Tomatoes!</h2>
        </span>
        <div className="card1">
          <a href="https://poke-slap.herokuapp.com/">
            <img title="Poke-Slap" src={fresh} width="105%" alt="" />
          </a>
          <p>
            Fresh Tomatoes is a game that uses the IMDB API. The game shows the
            player a random movie poster as well as a rotten tomato review for
            that movie. The player has to try and guess the movie rating.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
