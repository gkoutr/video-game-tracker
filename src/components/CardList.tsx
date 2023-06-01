import React from "react";
import GameCard from "./GameCard";
import { Row } from "react-bootstrap";

interface Props {
  games: Game[];
}

const CardList = ({ games }: Props) => {
  return (
    <>
      <h2>My Games</h2>
      <Row xs={1} md={3} className="g-4">
        {games.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </Row>
    </>
  );
};

export default CardList;
