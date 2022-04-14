import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsCompo from './components/NewsCompo';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  page = 10;
  countryCode = "in";
  render() {
    return (
      <Router>
      <div>
        <Navbar countryCode={this.countryCode}/>
        <Switch>
          <Route exact path="/" element={<NewsCompo key={'general'} pageSize={this.page} country={'in'} category={'general'}/>} />
          <Route exact path="/home" element={<NewsCompo key={'general'} pageSize={this.page} country={'in'} category={'general'}/>} />
          <Route exact path="/business" element={<NewsCompo key={'business'} pageSize={this.page} country={'in'} category={'business'}/>} />
          <Route exact path="/entertainment" element={<NewsCompo key={`entertainment`} pageSize={this.page} country={'in'} category={'entertainment'}/>} />
          <Route exact path="/general" element={<NewsCompo key={'general'} pageSize={this.page} country={'in'} category={'general'}/>} />
          <Route exact path="/health" element={<NewsCompo key={'health'} pageSize={this.page} country={'in'} category={'health'}/>} />
          <Route exact path="/science" element={<NewsCompo key={'science'} pageSize={this.page} country={'in'} category={'science'}/>} />
          <Route exact path="/sports" element={<NewsCompo key={'sports'} pageSize={this.page} country={'in'} category={'sports'}/>} />
          <Route exact path="/technology" element={<NewsCompo key={'technology'} pageSize={this.page} country={'in'} category={'technology'}/>} />
        </Switch>
      </div>
     </Router>
    )
  }
}


