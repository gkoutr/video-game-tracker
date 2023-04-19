import { Button, Form } from "react-bootstrap";

const GameForm = () => {
  return (
    <>
      <h1>Video Game Form</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Game Title " />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPlatform">
          <Form.Label>Platform</Form.Label>
          <Form.Control type="input" placeholder="Enter Game Platform" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default GameForm;
