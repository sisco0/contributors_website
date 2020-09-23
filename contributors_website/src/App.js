import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavTabs from './navbar.js';
import MainComponent from './mainComponent.js';
import JoinUsComponent from './joinUsComponent.js';
import ProcessCards from './processCards.js';
import FirstTimersOnlyIssue from './firstTimersOnlyIssue.js';
import GetContributors from './contributors.js';
import FooterComponent from './footerComponent.js';
import OssComponent from './ossComponent.js';

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
