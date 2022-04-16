import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



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
  capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

  constructor(props){
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    } 
    document.title = ` ${this.capitalizeFirstLetter(this.props.category)} - JhakaasNews`;
  }

  async updateNews(){
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eac5e8d953e14688b3a94f5614f62fa9&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading: true});
    this.props.setProgress(30);
    let data = await fetch(url);
    this.props.setProgress(70);
    let parsedData = await data.json()
    this.props.setProgress(100);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false});
  }

  async componentDidMount(){
    this.updateNews();
  }

  fetchMoreData = async()=>{
    this.setState({page: this.state.page + 1});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eac5e8d953e14688b3a94f5614f62fa9&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults, loading: false});
  }
  
  render() {
    return (
      <>
       <div className='container my-5' style={{maxWidth: "70rem"}}>
        <h1>Top {this.capitalizeFirstLetter(this.props.category)} Headlines - Jhakaas News</h1>
        <hr />
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container my-4">
        <div className="row">
        {this.state.articles.map((element,index)=>{
          return <div className="col-md-4" key={index}>
          <NewsItems title={element.title === null?this.deafaultTitle:element.title} description={element.description} imageUrl={element.urlToImage === null?this.defaultImg:element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
        })}
        </div>
          </div>
        </InfiniteScroll>
       </div>
      
      </>
    )
  }
}

export default NewsCompo
