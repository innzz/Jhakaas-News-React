import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const NewsCompo = (props)=>{
  
  let defaultImg = `	https://c.ndtvimg.com/2022-04/a7i04vu8_ms-dhoni-csk-ipl-2022_625x300_13_April_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675`;
  let deafaultTitle = "Breaking news";

  const capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  const [articles,setarticles] = useState([]);
  // const [loading,setloading] = useState(false);
  const [page,setpage] = useState(1);
  const [totalResults,settotalResults] = useState(0);

    document.title = ` ${capitalizeFirstLetter(props.category)} - JhakaasNews`;

    const updateNews = async()=>{
    props.changeProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // setloading(true);
    props.changeProgress(30);
    let data = await fetch(url);
    props.changeProgress(70);
    let parsedData = await data.json()
    props.changeProgress(100);
    setarticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    // setloading(false);
  }

  useEffect(()=>{
    updateNews();
    // eslint-disable-next-line
  },[]);


  const fetchMoreData = async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`
    setpage(page+1);
    // setloading(true);
    let data = await fetch(url);
    let parsedData = await data.json()
    setarticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
    // setloading(false);
  }
  
    return (
      <>
       <div className='container' style={{marginTop: "80px"}}>
        <h1>Top {capitalizeFirstLetter(props.category)} Headlines - Jhakaas News</h1>
        <hr />
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container my-4">
        <div className="row" style={{maxWidth: "64rem"}}>
        {articles.map((element,index)=>{
          return <div className="col-md-4" style={{zIndex:"-1"}} key={index}>
          <NewsItems title={element.title === null?deafaultTitle:element.title} description={element.description} imageUrl={element.urlToImage === null?defaultImg:element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
        })}
        </div>
          </div>
        </InfiniteScroll>
       </div>
      
      </>
    )
}
NewsCompo.defaultProps = {
  pageSize: 8,
  category: 'entertainment',
  country: 'in'
}

NewsCompo.propTypes = {
  pageSize: PropTypes.number,
  category: PropTypes.string,
  country: PropTypes.string
}

export default NewsCompo
