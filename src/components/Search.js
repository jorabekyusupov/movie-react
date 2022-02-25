import React from "react";

export default class Search extends React.Component {
  state = {
    search: "panda",
    type: "all"
  };

  getMovie() {
     this.props.searchMovie(this.state.search, this.state.type);
  }
  handleKey = (e) => {
    if (e.key === "Enter") {
      this.getMovie();
    }
  };
  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };
  handleFilter = (e) => {
    this.setState(
      () => ({
        type: e.target.dataset.type
      }),
      () => {
        this.props.searchMovie(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div className="row">
        <div className="col s12 ">
          <div className="input-field inline inp_search">
            <input
              onKeyDown={this.handleKey}
              onChange={this.handleChange}
              type="search"
              placeholder="search"
              value={this.state.search}
            />
          </div>
          <button
            onClick={()=>{
              this.props.searchMovie(this.state.search, this.state.type);
            }}
            className="waves-effect waves-light btn deep-purple darken-3"
          >
            Search
          </button>
          <div>
            <label>
              <input
                className="with-gap deep-purple darken-3"
                name="type"
                type="radio"
                data-type="all"
                onChange={this.handleFilter}
                checked={this.state.type === "all"}
              />
              <span>All</span>
            </label>
            <label>
              <input
                className="with-gap deep-purple darken-3"
                name="type"
                type="radio"
                data-type="movie"
                onChange={this.handleFilter}
                checked={this.state.type === "movie"}
              />
              <span>Movies only</span>
            </label>
            <label>
              <input
                className="with-gap deep-purple darken-3"
                name="type"
                type="radio"
                data-type="series"
                onChange={this.handleFilter}
                checked={this.state.type === "series"}
              />
              <span>Series only</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}
