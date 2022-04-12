import React, { Component } from 'react'
import NewsItems from './NewsItems'



export class NewsCompo extends Component {
  getData() {
    fetch('https://newsapi.org/v2/top-headlines?apiKey=eac5e8d953e14688b3a94f5614f62fa9&q=movies').then((response)=>{response.json()}).then((data)=>{ articles = data}); 
  };ljbvbevur iurureug ;regljrgegu gg er gurg uojlbdjvb uhvfdh
  this.getData();

  constructor(){
    super();
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  render() {
    console.log(this.state.articles);
    return (
      <div className='container my-5'>
        {/* <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
          <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
        })}
        </div> */}
      </div>
    )
  }
}

export default NewsCompo
