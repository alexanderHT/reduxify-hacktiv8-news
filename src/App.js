import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import NewList from './components/new_list'
import PeopleList from './components/people_list'
import FormNew from './components/form_new'

class News extends Component {
  render() {
    return (
        <div>
          <FormNew />
          <NewList />
        </div>
    );
  }
}

class Peoples extends Component {
  render() {
    return (
          <PeopleList />
    );
  }
}

class Nav extends Component {
  render() {
    return (
      <Router>
         <div>
           <div className="App">
             <div className="App-header">
               <img src={logo} className="App-logo" alt="logo" />
               <h2>Welcome to React</h2>
             </div>
           </div>

           <div className="nav">
             <ul>
               <li><Link to="/">news</Link></li>
               <li><Link to="/peoples">people</Link></li>
             </ul>
          </div>

           <hr/>

         <Route exact path="/" component={News}/>
           <Route path="/peoples" component={Peoples}/>
         </div>
       </Router>
    )
  }
}

export default Nav;
