import logo from './logo.svg';
import './App.css';
import React from 'react';
import Profile from './components/Profile';
import Navigation from './components/Navigation'

class App extends React.Component {
  render(){
    return <div>
      <Navigation></Navigation>
      <Profile></Profile>
    </div>
  }
}

export default App;
