import React from "react";
import Loader from "../components/Loader";
import Movies from "../components/Movies";
import Search from "../components/Search";

export default class Main extends React.Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=5d9b52ac&s=panda")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }
  searchMovies = (str, type = 'all' ) => {
    fetch(`http://www.omdbapi.com/?apikey=5d9b52ac&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  };
  render() {
    return (
      <div className="content container">
        <Search searchMovie={this.searchMovies} />
        {this.state.movies.length ? (
          <Movies movies={this.state.movies} />
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}
