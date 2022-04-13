import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
      let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div>
        <div className="card">
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}.</p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItems
