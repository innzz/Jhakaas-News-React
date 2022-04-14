import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'




export class NewsCompo extends Component {
  
  defaultImg = `	https://c.ndtvimg.com/2022-04/a7i04vu8_ms-dhoni-csk-ipl-2022_625x300_13_April_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675`;
  deafaultTitle = "Breaking news";

  static defaultProps = {
    pageSize: 8,
    category: 'entertainment',
    country: 'in'
  }

  static propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
    country: PropTypes.string
  }


  constructor(){
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1
    } 
  }

  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eac5e8d953e14688b3a94f5614f62fa9&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false});
  }

  async componentDidMount(){
    this.updateNews();
  }

  nextButton = async()=>{
    this.updateNews()
    this.setState({page: this.state.page + 1});
  }

  prevButton = async()=>{ 
    this.updateNews()
    this.setState({page: this.state.page - 1});
  }
  
  render() {
    return (
      <div className='container my-5'>
        <h1>Top Headlines - Jhakaas News</h1>
        <hr />
        {this.state.loading && <Spinner />}
        {this.state.articles && <div className="row">
        {!this.state.loading &&  this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
          <NewsItems title={element.title === null?this.deafaultTitle:element.title} description={element.description} imageUrl={element.urlToImage === null?this.defaultImg:element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
        })}
        </div>}
        <div className="container d-flex justify-content-between my-5">
          <button disabled={this.state.page <= 1} onClick={this.prevButton} className='btn btn-dark'>&larr;Prev</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className='btn btn-dark' onClick={this.nextButton} >Next&rarr;</button>
        </div>
      </div>
    )
  }
}

export default NewsCompo
