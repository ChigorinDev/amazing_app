import React from "react";
import "./Affairs.scss";
import { Container, Col, Row, Table, Button } from "react-bootstrap";
import SideBar from "../SideBar/SideBar";
import AffairsList from "./AffairsList";
import AddAffairModal from "./AddAffairModal";
// import AddAffairForm from "./AddAffairForm";

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
    ],

    modalShow: false
  };

  addAffair = (newAffair) => {
      newAffair.id = Math.random();
      let affairs = [...this.state.affairs, newAffair];
    this.setState({
      affairs: affairs
    });
  }

  deleteAffair = (id) => { 
    console.log(id);
    let affairs = this.state.affairs.filter(affair => {
      return affair.id !== id
    });
    this.setState({
      affairs: affairs
    });
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <Container fluid="true">
        <Row className="affairs-row">
          <Col xs={3} md={4} lg={2} className="sidebar-wrapper">
            <SideBar />
          </Col>
          <Col lg="auto" className="affairs-container">
            <Table borderless hover>
              <thead>
                <tr>
                  <th>Affair</th>
                  <th>Priority</th>
                  <th>Time</th>
                  <th>Action</th>
                </tr>
              </thead>
                <AffairsList affairs={this.state.affairs} deleteAffair={this.deleteAffair} />
            </Table>
            {/* <AddAffairForm addAffair={this.addAffair} /> */}
            <div className="add-affair-btn">
              <Button variant="outline-light" block onClick={() => this.setState({ modalShow: true })}>+add affair</Button>
              <AddAffairModal
                show={this.state.modalShow}
                onHide={modalClose}
                addAffair={this.addAffair}
              />
              
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Affairs;
