import React, { Component } from "react";

export class News extends Component {

  

  render() {
    let { title, describtion, img ,newsurl , author , date ,source} = this.props;

    return (
      <div>
        <div className="card" style={{width: "20rem"}} >
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}... <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left : "90%", zIndex:'1'}}>{source}</span></h5>
            <p className="card-text">{describtion}...</p>
            <p className="card-text"><small className="text-danger">By {author} on  {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
