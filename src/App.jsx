import React  from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Landing from './components/Landing/Landing'

// import logo from './logo.svg';

// const FuckingFour = () => <h1>404</h1>
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
     
            <Route exact path='/' component={Landing} />
        
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
