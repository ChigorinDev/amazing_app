import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddAffair extends Component {
  state = {
    affair: null,
    time: null,
    priority: null
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => { 
    e.preventDefault();
    this.props.addAffair(this.state);
    console.log(this.state);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Нужно сделать:</Form.Label>
          <Form.Control
            onChange={this.handleChange}
            id="affair"
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Приоритет:</Form.Label>
          <Form.Control
            onChange={this.handleChange}
            id="priority"
            as="select"
          >
            <option>Важно</option>
            <option>Нормально</option>
            <option>Можно отложить</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Дата:</Form.Label>
          <Form.Control
            onChange={this.handleChange}
            id="time"
            type="date"
          />
        </Form.Group>

        <Button  onClick={this.handleSubmit} variant="light" type="submit">
          Создать
        </Button>
      </Form>
    );
  }
}

export default AddAffair;
