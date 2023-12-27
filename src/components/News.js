// import React, { Component } from "react";
import React, { useEffect,useState } from "react"; //useEffect is use as the componentdidmount in funtion based component and useState is used as the constructor in function based component
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
// export class News extends Component { remove this in funtion based component

const News=(props)=>{    //change all props into props


  // In function based component we use propType and defaultProps at the end of the component so we now comment out this and sift them to end 
  // static defaultProps = {
  //   country: "in",
  //   pageSize: 8,
  //   category: "general",
  // };
  // static propTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string,
  // };

//Use state
const [articles ,setArticles]=useState([])
const [loading ,setLoading]=useState(true)
const [page ,setPage]=useState(1)
const [totalResults ,seTotalResults]=useState(0)
// document.title = `${capatalize(props.category)} - Cookru-ku`;
  const capatalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  //commenting out constructor in funtion based component
  // constructor(props) {
  //   super(props);
  //   console.log("This is a constructor in news js component.");
  //   // state = {
  //   //   articles: articles,
  //   //   loading: true,
  //   //   page: 1,
  //   //   totalResults: 0,
  //   // };
  //   // document.title = `${capatalize(props.category)} - Cookru-ku`;
  // }
  // console.log(props.check)


  const updateNews=async()=>{
    props.setProgress(0)
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${
      props.category
    }&apiKey=${props.apikey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    //  console.log(props.check)
    // setState({ loading: true });
    setLoading(true)

    let data = await fetch(url);
    let parsedata = await data.json();
    // console.log(parsedata);
    setArticles(parsedata.articles);
    seTotalResults(parsedata.totalResults);
    setLoading(false)

      //  we comment out setState eecause we not usethis in function based component 
    // setState({                     
    //   articles: parsedata.articles,
    //   totalResults: parsedata.totalResults,
    //   loading: false,
    // });
  }

  useEffect( ()=>{
    const fetchData = async () => {
      props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pageSize}`;
      console.log(props.check);

      setLoading(true);
      props.setProgress(40);

      try {
        let data = await fetch(url);
        props.setProgress(70);

        let parsedata = await data.json();
        // console.log(parsedata);

        setArticles(parsedata.articles);
        seTotalResults(parsedata.totalResults);
        setLoading(false);
        props.setProgress(100);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error as needed
        setLoading(false);
      }
    };

    fetchData();
    // updateNews();
  },[]); //in last it has a blank [] this will take parameter that on what change this function is run we keep it blank so it will run only one time like componentdidMount()


// we comment out componentDidMount Instead of using componentDidMount in function component we use useEffect

  // async componentDidMount() {
  //   props.setProgress(10)
  //   // console.log("cdm");
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pageSize}`;
  //   console.log(props.check);
  //   setState({ loading: true });
  //   props.setProgress(40)

  //   let data = await fetch(url);
  //   props.setProgress(70)

  //   let parsedata = await data.json();
  //   // console.log(parsedata);

  //   setState({
  //     articles: parsedata.articles,
  //     totalResults: parsedata.totalResults,
  //     loading: false,
  //   });
  //   props.setProgress(100)

  //   // if i here call update news then we face a issue that automatic page size 2 will render in component did mount because initially we set the value of page to 1 and in update news we again do pae+1 then the value of page is now 2 so when component did mount run it will render page 2 and when we click on next button then also page 2 will render so don't call update news in component did mount
  //   // updateNews()
  // }
  // handlePreviousClick = async () => {

  //  // setState({page:page - 1}); //this is for class based component
  //   setPage(page-1);

  //   // updateNews(); this is how we call the function in class based component 
  //   updateNews();
  // };
  // handleNextClick = async () => {

  //       setState({page:page + 1});  => this is for class based component
  // setPage(page+1);
  // //       updateNews();
  // updateNews();

  // };

 const fetchMoreData = () => {
    setTimeout(async () => {
      // setPage(page +1)
      // setState({
      //   page: page + 1,
      // });
      const url = `https://newsapi.org/v2/top-headlines?country=${
        props.country
      }&category=${
        props.category
      }&apiKey=${props.apikey}&page=${
        page + 1
      }&pageSize=${props.pageSize}`;
      //  console.log(props.check)
      let data = await fetch(url);
      let parsedata = await data.json();
      // console.log(parsedata);
      // setState({
      //   articles: articles.concat(parsedata.articles),
      //   totalResults: parsedata.totalResults,
      //   loading: false,
      // });
      setArticles(articles.concat(parsedata.articles))
      seTotalResults(parsedata.totalResults);
      setLoading(false)

    }, 1500);
  };
  // render() { commenting out render funtion beacause it is not use in funtion base component so we comment out this render funtion 
    console.log("render");

    return (
      <div className="container my-4">
        <div className="row d-flex">
          <h2 className="text-center">
            News Headlines from {capatalize(props.category)} Category
          </h2>
          {/* <i class="fa-solid fa-mug-hot"></i> */}
          {/* this statement tells that if loading == true then spinner component is shown */}
          {/* {loading && <Spinner></Spinner>} */}
        </div>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length <= totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>

        {/* we now adding the infine scroll in our app so i comment out prevoius and next button and handleNextClick function and handlePrevious click function also
        <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark mx-4"
            onClick={handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            disabled={
              page + 1 >
              Math.ceil(totalResults / props.pageSize)
            }
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  // } commenting out render funtion beacause it is not use in funtion base component so we comment out this render funtion 
}

// In funtion based component we use <funtionname>.defaultProps and <funtionname>.propTypes 

News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

export default News;
