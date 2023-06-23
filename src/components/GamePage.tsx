import { useParams } from "react-router-dom";

interface GameProps {
  game: Game;
}
const GamePage = () => {
  let { id } = useParams();
  return (
    <div>
      <h2>{id}</h2>
    </div>
  );
};

export default GamePage;
