import GameForm from "./components/GameForm";
import CardList from "./components/CardList";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

import "./App.css";

const App = () => {
  const [games, setGames] = useState<Game[]>([
    {
      title: "TimeSplitters 2",
      platform: "Nintendo Gamecube",
    },
    {
      title: "F-Zero GX",
      platform: "Nintendo Gamecube",
    },
  ]);
  const onSubmitForm = (game: Game) => {
    setGames([...games, game]);
    debugger;
  };
  return (
    <Container className="p-3" style={{ maxWidth: "800px" }}>
      <h1 className="header">Video Game Tracker</h1>
      <GameForm onSubmitForm={onSubmitForm} />
      <CardList games={games} />
    </Container>
  );
};

export default App;
