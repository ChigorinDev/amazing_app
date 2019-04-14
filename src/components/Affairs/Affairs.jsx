import React from "react";
import "./Affairs.scss";
import { Container, Col, Row } from "react-bootstrap";
import SideBar from "../SideBar/SideBar";
import AffairsList from "./AffairsList";
import AddAffair from "./AddAffair";

class Affairs extends React.Component {
  state = {
    affairs: [
      { affair: "Купить корм Алисе", time: "20", priority: "важно", id: 1 },
      {
        affair: "Закончить Курс по Redux",
        time: "26",
        priority: "важно",
        id: 2
      },
      {
        affair: "Подготовить ДЗ для Саши",
        time: "16-го",
        priority: "средний",
        id: 3
      }
    ]
  };

  addAffair = (newAffair) => {
      newAffair.id = Math.random();
      let affairs = [...this.state.affairs, newAffair];
      this.setState({
          affairs: affairs
      })
  }

  render() {
    return (
      <Container fluid="true">
        <Row className="affairs-row">
          <Col xs={3} md={4} lg={2} className="sidebar-wrapper">
            <SideBar />
          </Col>
            <Col md={8} lg={10}className="affairs-container">
            <AffairsList affairs={this.state.affairs} />
              <AddAffair addAffair={this.addAffair}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Affairs;
