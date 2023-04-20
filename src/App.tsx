import GameForm from "./components/GameForm";
import CardList from "./components/CardList";
import { useState } from "react";

const App = () => {

  const [games, setGames] = useState<Game[]>([
    {
      "title": "TimeSplitters 2",
      "platform": "Nintendo Gamecube"
    },
    {
      "title": "F-Zero GX",
      "platform": "Nintendo Gamecube"
    }
  ])
  const onSubmitForm = (game: Game) => {
    setGames([...games, game])
    debugger
  }
  return (
    <div className="container">
      <GameForm onSubmitForm={onSubmitForm}/>
      <CardList games={games} />
    </div>
  );
};

export default App;
