import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsCompo from './components/NewsCompo';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  page = 5;
  countryCode = "in";
  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0
  }

  setProgress = (progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <Router>
      <div>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        />
        <Switch>
          <Route exact path="/" element={<NewsCompo apiKey={this.apiKey} setProgress={this.setProgress} key={'general'} pageSize={this.page} country={'in'} category={'general'}/>} />
          <Route exact path="/home" element={<NewsCompo apiKey={this.apiKey} setProgress={this.setProgress} key={'general'} pageSize={this.page} country={'in'} category={'general'}/>} />
          <Route exact path="/business" element={<NewsCompo apiKey={this.apiKey} setProgress={this.setProgress} key={'business'} pageSize={this.page} country={'in'} category={'business'}/>} />
          <Route exact path="/entertainment" element={<NewsCompo apiKey={this.apiKey} setProgress={this.setProgress} key={`entertainment`} pageSize={this.page} country={'in'} category={'entertainment'}/>} />
          <Route exact path="/general" element={<NewsCompo apiKey={this.apiKey} setProgress={this.setProgress} key={'general'} pageSize={this.page} country={'in'} category={'general'}/>} />
          <Route exact path="/health" element={<NewsCompo apiKey={this.apiKey} setProgress={this.setProgress} key={'health'} pageSize={this.page} country={'in'} category={'health'}/>} />
          <Route exact path="/science" element={<NewsCompo apiKey={this.apiKey} setProgress={this.setProgress} key={'science'} pageSize={this.page} country={'in'} category={'science'}/>} />
          <Route exact path="/sports" element={<NewsCompo apiKey={this.apiKey} setProgress={this.setProgress} key={'sports'} pageSize={this.page} country={'in'} category={'sports'}/>} />
          <Route exact path="/technology" element={<NewsCompo apiKey={this.apiKey} setProgress={this.setProgress} key={'technology'} pageSize={this.page} country={'in'} category={'technology'}/>} />
        </Switch>
      </div>
     </Router>
    )
  }
}


