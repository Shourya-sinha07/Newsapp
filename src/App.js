import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route ,  } from "react-router-dom";
export default class App extends Component {
  pageSize=6;
  state={
    progress:0
  }
 
  // apikey="fef1113cb63c4caaa8b7b21d6152ec0a"
  apikey=process.env.REACT_APP_NEWS_API
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
              <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
      />
        <Router>
          <Navbar />
          <Routes>
            <Route exact
              path="/"
              element={
                <News setProgress={this.setProgress} apikey={this.apikey}  key="general" pageSize={this.pageSize} country="in" category="general"></News>
              }
            />
            <Route exact
              path="/business"
              element={
                <News setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize={this.pageSize} country="in" category="business"></News>
              }
            />
            <Route exact
              path="/entertainment"
              element={
                <News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"></News>
              }
            />
            {/* <Route exact
              path="/general"
              element={
                <News setProgress={setProgress}  key="general" pageSize={this.pageSize} country="in" category="general"></News>
              }
            /> */}
            <Route exact
              path="/health"
              element={
                <News setProgress={this.setProgress} apikey={this.apikey} key="health" pageSize={this.pageSize} country="in" category="health"></News>
              }
            />
            <Route exact
              path="/science"
              element={
                <News setProgress={this.setProgress}  key="science" pageSize={this.pageSize} country="in" category="science"></News>
              }
            />
            <Route exact
              path="/sports"
              element={
                <News setProgress={this.setProgress}apikey={this.apikey} key="sports" pageSize={this.pageSize} country="in" category="sports"></News>
              }
            />
            <Route exact
              path="/technology"
              element={
                <News setProgress={this.setProgress} apikey={this.apikey} key="technology" pageSize={this.pageSize} country="in" category="technology"></News>
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}