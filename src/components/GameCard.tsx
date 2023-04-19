import placeHolderPhoto from "../assets/Timesplitters.jpg";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={placeHolderPhoto} />
        <Card.Body>
          <Card.Title>{game.title}</Card.Title>
          <Card.Subtitle>{game.platform}</Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default GameCard;
