import News from "./News";
import PropTypes from 'prop-types';


import React, { Component } from "react";

export class Newsitem extends Component {
  
  static defaultProps = {
    country : 'in',
    pageSize : 9,
    category : 'in'
  }

  
  
  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
  }

  constructor() {
    super();

    this.state = {
      articles:[],
      loading:false,
      page:1
    };
  }

  async componentDidMount(){
    
    let url  = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=6b7448fa1fb04a8b89caa821ffefb8c6&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsData = await data.json()
    console.log(parsData);
    this.setState({articles: parsData.articles  })
  }

  handelpre = async()=>{
    console.log("pre");

    let url  = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=6b7448fa1fb04a8b89caa821ffefb8c6&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsData = await data.json()
    console.log(parsData);

    this.setState({
      page:this.state.page-1,
      articles: parsData.articles
    })

  }

  handelnext= async ()=>{
    console.log("next");


    if(this.state.page +1 > Math.ceil(50/15)){

    }
    else{
        let url  = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=6b7448fa1fb04a8b89caa821ffefb8c6&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsData = await data.json()
        console.log(parsData);
        
        this.setState({
          page:this.state.page+1,
          articles: parsData.articles
      })
    }
    
    
  }

  render() {

    return (
      <div className="container my-4  ">
        <h3 className="text-center" >News- Top Headlines</h3>
        
        <div className="row my-5">
         {this.state.articles.map((element)=>{
          return <div className="col-md-4 my-3" key={element.url}>
            <News  title={element.title?element.title.slice(0,90):""} describtion={element.description?element.description.slice(0,150):"not available click on Read More"} img={element.urlToImage?element.urlToImage:"https://source.unsplash.com/300x200/?news"} newsurl={element.url}
              author={element.author?element.author:"Unknow"} date={element.publishedAt} source={element.source.name}
            />
          </div>
         })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handelpre}>&larr; Previous</button>
        <button disabled={this.state.page +1 > Math.ceil(50/15)} type="button" className="btn btn-dark" onClick={this.handelnext}>Next &rarr;</button>
        
        </div>
      </div>
    );
  }
}

export default Newsitem;
