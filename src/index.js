import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";

const API_KEY = "AIzaSyC8fYgZ0FsXubMXKfbk-ZRqm4N8-hqm-_8";

class App extends Component {
  constructor(props) {
    super(props);

    YTSearch({ key: API_KEY, term: "cats" }, videos => {
      this.setState({ videos });
    });

    this.state = { videos: [] };
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page DOM
ReactDOM.render(<App />, document.querySelector(".container"));
