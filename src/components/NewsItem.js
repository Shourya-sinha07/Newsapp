// import React, { Component } from "react";  remove this line in function based component
// import "./comp.css"
// export class NewsItem extends Component { remove this line for funtion based component
const  NewsItem=(props)=>{
  // render() { remove render funtion
    let { title, description, imageUrl, newsUrl,author,date,source } = props;
    return (
      <div className="container">

     
      <div className="my-3 ">

        {/* if you want to make this more responsive then give width to card on below 900 pixel */}
        <div className="card " >
          <div style={{display:'flex',position:'absolute',right:'0'}}>

            <span className=" badge rounded-pill bg-danger" style={{zIndex:"2" ,left:"90%"}}>
              {source}
            </span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://www.livemint.com/lm-img/img/2023/12/12/1600x900/stock_1702392219404_1702392219570.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          {/* you can access props in class using two way 1:- let { title, description, imageUrl, newsUrl } = this.props;
                                                      2:-using title or decription etc */}

          <div className="card-body ">
            <h5 className="card-title">{title}</h5>

            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
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
  // } remove render funtion
}

export default NewsItem;
