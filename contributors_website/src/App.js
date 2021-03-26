import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavTabs from './components/navbar.js';
import MainComponent from './components/mainComponent.js';
import JoinUsComponent from './components/joinUsComponent.js';
import ProcessCards from './processCards.js';
import FirstTimersOnlyIssue from './components/firstTimersOnlyIssue.js';
import GetContributors from './components/contributors.js';
import FooterComponent from './components/footerComponent.js';
import OssComponent from './components/ossComponent.js';

function App() {
  return (
    <div className="App">
      <NavTabs/>
      <MainComponent/>
      <JoinUsComponent/>
      <OssComponent/>
      <ProcessCards/>
      <FirstTimersOnlyIssue/>
      <GetContributors/>
      <FooterComponent/>
    </div>
  );
}

export default App;
