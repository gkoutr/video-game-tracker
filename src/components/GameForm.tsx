import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import GameCard from "./GameCard";

interface Props {
  onSubmitForm: (game: Game) => void;
}

const GameForm = ({ onSubmitForm }: Props) => {
  const [gameValues, setGameValues] = useState({
    title: "",
    platform: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setGameValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitForm = () => {
    if (gameValues.title.length === 0 || gameValues.platform.length === 0) {
      return;
    }
    let game: Game = {
      title: gameValues.title,
      platform: gameValues.platform,
    };
    onSubmitForm(game);
  };

  const inputClass = gameValues.platform.length;
  return (
    <>
      <h1>Video Game Form</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={gameValues.title}
            placeholder="Enter Game Title "
            onChange={handleInputChange}
          />
          <Form.Control.Feedback type="invalid">
            This field is required.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPlatform">
          <Form.Label>Platform</Form.Label>
          <Form.Control
            type="text"
            name="platform"
            placeholder="Enter Game Platform"
            value={gameValues.platform}
            onChange={handleInputChange}
          />
          <Form.Control.Feedback type="invalid">
            This field is required.
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" onClick={handleSubmitForm}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default GameForm;
