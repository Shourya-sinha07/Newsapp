import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  document.title = `${capitalize(props.category)} - Cookru-ku`;

  useEffect(() => {
    const fetchData = async () => {
      props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
      console.log(props.check);

      setLoading(true);
      props.setProgress(40);

      try {
        let data = await fetch(url);
        props.setProgress(70);

        let parsedData = await data.json();

        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = () => {
    console.log("first pages =", page);
    setTimeout(async () => {
      setPage(page + 1);
      console.log("pages =", page);
      const url = `https://newsapi.org/v2/top-headlines?country=${
        props.country
      }&category=${props.category}&apiKey=${props.apikey}&page=${
        page + 1
      }&pageSize=${props.pageSize}`;
      console.log("again page", page);

      let data = await fetch(url);
      let parsedData = await data.json();

      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="container my-4">
      <div className="row d-flex">
        <h2 className="text-center" style={{ marginTop: "40px" }}>
          News Headlines from {capitalize(props.category)} Category
        </h2>
        {loading && <Spinner></Spinner>}
      </div>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
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
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apikey: PropTypes.string,
  check: PropTypes.any,
  setProgress: PropTypes.func,
};

export default News;
