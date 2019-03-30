import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.scss';
import Landing from './components/Landing/Landing';
import Affairs from './components/Affairs/Affairs';
import Budget from './components/Budget/Budget';
import Contacts from './components/Contacts/Contacts';
import Guests from './components/Guests/Guests';
import TimeTable from './components/TimeTable/TimeTable';



// import logo from './logo.svg';

// const FuckingFour = () => <h1>404</h1>
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Container fluid="true" className="landing-wrapper">
            <Route exact path='/' component={Landing} />
            <Route path='/affairs' component={Affairs} />
            <Route path='/budget' component={Budget} />
            <Route path='/contacts' component={Contacts} />
            <Route path='/guests' component={Guests} />
            <Route path='/timetable' component={TimeTable} />
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
