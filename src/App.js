import "./App.css";
// import React, { Component } from "react"; comment out linw for making function based component 
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route ,  } from "react-router-dom";
// export default class App extends Component {  make it a function 
const App=()=>{
  const pageSize=6;

  // comment out state because it is not class based component
  // state={
  //   progress:0
  // }
 const[progress ,setProgress]=useState(0)
  // apikey="fef1113cb63c4caaa8b7b21d6152ec0a"
  const apikey=process.env.REACT_APP_NEWS_API
  // setProgress=(progress)=>{ we dont need because this is already make set progress in use state
  //   setState({progress:progress})
  // }
  // render() { comment out render 
    return (
      <div>
              <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
        <Router>
          <Navbar />
          <Routes>
            <Route exact
              path="/"
              element={
                <News setProgress={setProgress} apikey={apikey}  key="general" pageSize={pageSize} country="in" category="general"></News>
              }
            />
            <Route exact
              path="/business"
              element={
                <News setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country="in" category="business"></News>
              }
            />
            <Route exact
              path="/entertainment"
              element={
                <News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"></News>
              }
            />
            {/* <Route exact
              path="/general"
              element={
                <News setProgress={setProgress}  key="general" pageSize={pageSize} country="in" category="general"></News>
              }
            /> */}
            <Route exact
              path="/health"
              element={
                <News setProgress={setProgress} apikey={apikey} key="health" pageSize={pageSize} country="in" category="health"></News>
              }
            />
            <Route exact
              path="/science"
              element={
                <News setProgress={setProgress} apikey={apikey} key="science" pageSize={pageSize} country="in" category="science"></News>
              }
            />
            <Route exact
              path="/sports"
              element={
                <News setProgress={setProgress}apikey={apikey} key="sports" pageSize={pageSize} country="in" category="sports"></News>
              }
            />
            <Route exact
              path="/technology"
              element={
                <News setProgress={setProgress} apikey={apikey} key="technology" pageSize={pageSize} country="in" category="technology"></News>
              }
            />
          </Routes>
        </Router>
      </div>
    );
  // } comment out render 
}
export default App;