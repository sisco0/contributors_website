import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavTabs from './navbar.js';
import MainComponent from './mainComponent.js';
import JoinUsComponent from './joinUsComponent.js';
import ProcessCards from './processCards.js';
import FirstTimersOnlyIssue from './firstTimersOnlyIssue.js';
import GetContributors from './contributors.js';

function App() {
  return (
    <div className="App">
      <NavTabs/>
      <MainComponent/>
      <JoinUsComponent/>
      <ProcessCards/>
      <FirstTimersOnlyIssue/>
      <GetContributors/>
    </div>
  );
}

export default App;
