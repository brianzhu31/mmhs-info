import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/home';
import Menu from './components/Menu';
import Clubs from './pages/clubs';
import Athletics from './pages/athletics';
import Events from './pages/events';
import OurSchool from './pages/our-school';
import IBProgram from './pages/ib-program';
import Shsm from './pages/shsm';
import OurTeam from './pages/our-team';
import Contact from './pages/contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  let [menuOn, setMenuOn] = useState(false) //react state that stores whether the menu is on or off
  let [menuIcon, setMenuIcon] = useState('Menu')

  return (
    <>
      <Router>
        <Navbar menuOn={menuOn} menuIcon={menuIcon} toggleMenu={menuOn => setMenuOn(menuOn)} toggleMenuIcon={menuIcon => setMenuIcon(menuIcon)}/>
          {/* passes setMenuOn and setMenuIcon to Navbar component, allows Navbar to toggle the menu and change the state of menuOn*/}
        <div className='site-container'>
          <Sidebar />
          <Switch>
            {/* Define new page routes here */}
            <Route path='/' exact component={Home} />
            <Route path='/clubs' exact component={Clubs} />
            <Route path='/athletics' exact component={Athletics} />
            <Route path='/events' exact component={Events} />
            <Route path='/our-school' exact component={OurSchool} />
            <Route path='/ib-program' exact component={IBProgram} />
            <Route path='/shsm' exact component={Shsm} />
            <Route path='/contact' exact component={Contact} />
            <Route path='/our-team' exact component={OurTeam} />
          </Switch>
        </div>
        <Menu menuOn={menuOn} toggleMenu={menuOn => setMenuOn(menuOn)} toggleMenuIcon={menuIcon => setMenuIcon(menuIcon)}/>
        {/* Menu component re-renders after a change in state caused by Navbar toggle menuOn */}
        {/* passes setMenuOn and setMenuIcon to Menu component, allows Menu to toggle the menu and change the state of menuOn*/}
      </Router>
    </>
  );
}

export default App;
