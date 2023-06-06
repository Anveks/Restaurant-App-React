import { useEffect, useReducer, useState } from 'react';
import { Container, FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const initialState = {
  fullName: "",
  email: "",
  message: ""
};

const formReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_FULL_NAME':
      return { ...state, fullName: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_MESSAGE':
      return { ...state, message: action.payload };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
};

function ContactUs() {

  const [formSent, setFormSent] = useState(false);

  const [formState, dispatch] = useReducer(formReducer, initialState);

  function handleSubmit(e: any) {
    e.preventDefault();
    dispatch({ type: 'RESET_FORM' }); // resetting the form
    setFormSent(true);
    console.log(formState);
  }

  return (
    <Container>
      {
        !formSent
          ? <Form onSubmit={handleSubmit}>
            <h1>Send us your feedback!</h1>
            <Row className="mb-3">

              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Full Name: </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="John Doe"
                  value={formState.fullName}
                  onChange={(e) => { dispatch({ type: 'SET_FULL_NAME', payload: e.target.value }) }} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email: </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={formState.email}
                  onChange={(e) => { dispatch({ type: 'SET_EMAIL', payload: e.target.value }) }}
                />
              </Form.Group>
            </Row>

            <FloatingLabel controlId='floatingTextarea' label="Leave your message here..." className='mb-3'>
              <Form.Control
                as="textarea"
                value={formState.message}
                onChange={(e) => { dispatch({ type: 'SET_MESSAGE', payload: e.target.value }) }}
              />
            </FloatingLabel>

            <Button variant="dark" type="submit">
              Send
            </Button>
          </Form>

          : <div>Thank you!</div>
      }

    </Container>
  );
}

export default ContactUs;