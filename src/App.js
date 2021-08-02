import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Company from './pages/Company';
import VideoPlayer from './pages/VideoPlayer';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Customers from './pages/Customers';
/*import RxPlayer from "rx-player";
import ChannelUrl from './data/channels.json';*/


function App() {
  
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/company' component={Company}/>
      <Route path='/videoplayer' component={VideoPlayer}/>
      <Route path='/team' component={Team}/>
      <Route path='/customers' component={Customers}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
    </Router>
    </>
  );
}


export default App;
