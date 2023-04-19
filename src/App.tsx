import GameForm from "./components/GameForm";
import CardList from "./components/CardList";

const App = () => {
  let games: Game[] = [
    {
      "title": "TimeSplitters 2",
      "platform": "Nintendo Gamecube"
    },
    {
      "title": "F-Zero GX",
      "platform": "Nintendo Gamecube"
    }
  ]
  return (
    <div className="container">
      <GameForm />
      <CardList games={games} />
    </div>
  );
};

export default App;
