import React, { Component } from "react";
// import "./comp.css"
export class NewsItem extends Component {
  render() {
    // let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="container">

     
      <div className="my-3 ">

        {/* if you want to make this more responsive then give width to card on below 900 pixel */}
        <div className="card " >
          <div style={{display:'flex',position:'absolute',right:'0'}}>

            <span className=" badge rounded-pill bg-danger" style={{zIndex:"2" ,left:"90%"}}>
              {this.props.source}
            </span>
          </div>
          <img
            src={
              !this.props.imageUrl
                ? "https://www.livemint.com/lm-img/img/2023/12/12/1600x900/stock_1702392219404_1702392219570.jpg"
                : this.props.imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          {/* you can access props in class using two way 1:- let { title, description, imageUrl, newsUrl } = this.props;
                                                      2:-using this.props.title or this.props.decription etc */}

          <div className="card-body ">
            <h5 className="card-title">{this.props.title}</h5>

            <p className="card-text">{this.props.description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!this.props.author ? "Unknown" : this.props.author} on{" "}
                {new Date(this.props.date).toGMTString()}
              </small>
            </p>
            <a
              href={this.props.newsUrl}
              target="blank"
              className="btn btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default NewsItem;
