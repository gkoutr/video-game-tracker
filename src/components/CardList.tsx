import React from "react";
import GameCard from "./GameCard";
import { Row } from "react-bootstrap";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import GamePage from "./GamePage";

interface Props {
  games: Game[];
}

const CardList = ({ games }: Props) => {
  return (
    <>
      <div>
        <h2>My Games</h2>
        <Row xs={1} md={3} className="g-4">
          {games.map((game, index) => (
            <a href={`/game/${game.id}`}>
              <GameCard key={index} game={game} />
            </a>
          ))}
        </Row>
        {games.map((game) => (
          <Link to={`/game/${game.id}`} />
        ))}
      </div>
    </>
  );
};

export default CardList;
