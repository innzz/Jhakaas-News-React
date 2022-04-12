import React, { Component } from 'react'
import NewsItems from './NewsItems'



export class NewsCompo extends Component {
  
  constructor(){
    super();
    this.state = {
      articles: this.articles,
      loading: false
    } 
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=eac5e8d953e14688b3a94f5614f62fa9";
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles});
  }
  
  render() {
    return (
      <div className='container my-5'>
        {this.state.articles && <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
          <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
        })}
        </div>}
      </div>
    )
  }
}

export default NewsCompo
