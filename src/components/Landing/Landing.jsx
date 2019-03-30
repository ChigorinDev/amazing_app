import React from 'react';
import './Landing.scss';
import SideBar from '../SideBar/SideBar';
import { Container, Col } from 'react-bootstrap';


class Landing extends React.Component {
    render() {
        return (
            <Container fluid="true" className="landing-wrapper">
                <Col md={4} lg={2}>
                <SideBar />
                </Col>
            </Container>
        );
    }
}

export default Landing;