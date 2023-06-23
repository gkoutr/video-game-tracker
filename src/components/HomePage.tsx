import GameForm from "./GameForm";
import CardList from "./CardList";
import { useState } from "react";

function HomePage() {
  const [games, setGames] = useState<Game[]>([
    {
      id: 1,
      title: "TimeSplitters 2",
      platform: "Nintendo Gamecube",
    },
    {
      id: 2,
      title: "F-Zero GX",
      platform: "Nintendo Gamecube",
    },
  ]);
  const onSubmitForm = (game: Game) => {
    setGames([...games, game]);
  };
  return (
    <>
      <h1 className="header">Video Game Tracker</h1>
      <GameForm onSubmitForm={onSubmitForm} />
      <CardList games={games} />
    </>
  );
}

export default HomePage;
