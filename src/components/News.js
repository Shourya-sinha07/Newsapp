import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
// import Spinner from "./Spinner";
import Spinner from "./Spinner";
export class News extends Component {
  articles = [
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capatalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    console.log("This is a constructor in news js component.");
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capatalize(this.props.category)} - Cookru-ku`;
  }
  // console.log(this.props.check)
  async updateNews() {
    this.props.setProgress(0)
    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=${this.props.apikey}&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    //  console.log(this.props.check)
    this.setState({ loading: true });

    let data = await fetch(url);
    let parsedata = await data.json();
    // console.log(parsedata);
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.props.setProgress(10)
    // fef11138cb63c4caaab7b21d6152ec0a
    // console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pageSize=${this.props.pageSize}`;
    console.log(this.props.check);
    this.setState({ loading: true });
    this.props.setProgress(40)

    let data = await fetch(url);
    this.props.setProgress(70)

    let parsedata = await data.json();
    // console.log(parsedata);
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loading: false,
    });
    this.props.setProgress(100)

    // if i here call update news then we face a issue that automatic page size 2 will render in component did mount because initially we set the value of page to 1 and in update news we again do pae+1 then the value of page is now 2 so when component did mount run it will render page 2 and when we click on next button then also page 2 will render so don't call update news in component did mount
    // this.updateNews()
  }
  // handlePreviousClick = async () => {

  //   this.setState({page:this.state.page - 1});
  //   this.updateNews();
  // };
  // handleNextClick = async () => {
  //   // // console.log("next is clicked");
  //   // let a = Math.ceil(this.state.totalResults / this.props.pageSize);
  //   // console.log(a);
  //   // if (
  //   //   !(this.state.page + 1 >
  //   //   Math.ceil(this.state.totalResults / this.props.pageSize)
  //   // ))  {
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fef1113cb63c4caaa8b7b21d6152ec0a&page=${
  //   //     this.state.page + 1
  //   //   }&pageSize=${this.props.pageSize}`;
  //   //   this.setState({loading:true})
  //   //   let data = await fetch(url);
  //   //   let parsedata = await data.json();
  //   //   // console.log(parsedata);
  //   //   this.setState({
  //   //     articles: parsedata.articles,
  //   //     page: this.state.page + 1,
  //   //     loading:false
  //   //   });
  //   //   console.log(this.state.page);
  //   // }
  //       this.setState({page:this.state.page + 1});
  //       this.updateNews();

  // };

  fetchMoreData = () => {
    setTimeout(async () => {
      this.setState({
        page: this.state.page + 1,
      });
      const url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=${this.props.apikey}&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      //  console.log(this.props.check)
      let data = await fetch(url);
      let parsedata = await data.json();
      // console.log(parsedata);
      this.setState({
        articles: this.state.articles.concat(parsedata.articles),
        totalResults: parsedata.totalResults,
        loading: false,
      });
    }, 1500);
  };
  render() {
    console.log("render");

    return (
      <div className="container my-4">
        <div className="row d-flex">
          <h2 className="text-center">
            News Headlines from {this.capatalize(this.props.category)} Category
          </h2>
          {/* <i class="fa-solid fa-mug-hot"></i> */}
          {/* this statement tells that if this.state.loading == true then spinner component is shown */}
          {this.state.loading && <Spinner></Spinner>}
        </div>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length <= this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
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
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark mx-4"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}

export default News;
