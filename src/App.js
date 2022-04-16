import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import NewsCompo from './components/NewsCompo';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

  const App = ()=>{
  let page = 5;
  let apiKey = process.env.REACT_APP_NEWS_API;


  const [progress,setProgress] = useState(0);

  const changeProgress = (progress)=>{
    setProgress(progress);
  }

    return (
      <Router>
      <div>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        />
        <Switch>
          <Route exact path="/" element={<NewsCompo apiKey={apiKey} changeProgress={changeProgress} key={'general'} pageSize={page} country={'in'} category={'general'}/>} />
          <Route exact path="/home" element={<NewsCompo apiKey={apiKey} changeProgress={changeProgress} key={'general'} pageSize={page} country={'in'} category={'general'}/>} />
          <Route exact path="/business" element={<NewsCompo apiKey={apiKey} changeProgress={changeProgress} key={'business'} pageSize={page} country={'in'} category={'business'}/>} />
          <Route exact path="/entertainment" element={<NewsCompo apiKey={apiKey} changeProgress={changeProgress} key={`entertainment`} pageSize={page} country={'in'} category={'entertainment'}/>} />
          <Route exact path="/general" element={<NewsCompo apiKey={apiKey} changeProgress={changeProgress} key={'general'} pageSize={page} country={'in'} category={'general'}/>} />
          <Route exact path="/health" element={<NewsCompo apiKey={apiKey} changeProgress={changeProgress} key={'health'} pageSize={page} country={'in'} category={'health'}/>} />
          <Route exact path="/science" element={<NewsCompo apiKey={apiKey} changeProgress={changeProgress} key={'science'} pageSize={page} country={'in'} category={'science'}/>} />
          <Route exact path="/sports" element={<NewsCompo apiKey={apiKey} changeProgress={changeProgress} key={'sports'} pageSize={page} country={'in'} category={'sports'}/>} />
          <Route exact path="/technology" element={<NewsCompo apiKey={apiKey} changeProgress={changeProgress} key={'technology'} pageSize={page} country={'in'} category={'technology'}/>} />
        </Switch>
      </div>
     </Router>
    )
}


export default App