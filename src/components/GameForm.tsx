import { useEffect, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

interface Props {
  onSubmitForm: (game: Game) => void;
}

const GameForm = ({ onSubmitForm }: Props) => {
  //const platforms = ["Nintendo Gamecube", "PC", "Playstation"];
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [gameValues, setGameValues] = useState({
    title: "",
    platform: "",
  });
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.rawg.io/api/platforms?key=165f53e599ac4417af09f6dcf25be33b",
        { mode: "cors" }
      );
      // .then((response) => response.json)
      // .then((results) => console.log(results))
      // .catch((error) => console.log(error));
      const newData = await response.json();
      const results = newData.results;
      let platformsFromServer: string[] = [];
      results.map((item: any) => {
        platformsFromServer.push(item.name);
      });
      setPlatforms(platformsFromServer);
    }
    fetchData();
  }, []);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    debugger;
    setGameValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const renderSuggestion = (suggestion: any) => {
    return <div>{suggestion}</div>;
  };

  const inputProps = {
    placeholder: "Enter game title name",
    value: gameValues.title,
    onChange: handleInputChange,
  };

  const handleSubmitForm = () => {
    if (gameValues.title.length === 0 || gameValues.platform.length === 0) {
      return;
    }
    debugger;
    let game: Game = {
      title: gameValues.title,
      platform: gameValues.platform,
    };
    onSubmitForm(game);
  };

  const inputClass = gameValues.platform.length;
  return (
    <>
      <Form className="p-3">
        <Form.Group as={Row} className="mb-3" controlId="formTitle">
          <Form.Label column sm={2}>
            Title
          </Form.Label>
          <Col sm={10}>
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
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlatform">
          <Form.Label column sm={2}>
            Platform
          </Form.Label>
          <Col sm={10}>
            <Form.Select
              name="platform"
              onChange={handleInputChange}
              placeholder="Select a Platform"
            >
              {platforms.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Form.Group>
        <Button variant="primary" onClick={handleSubmitForm}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default GameForm;
