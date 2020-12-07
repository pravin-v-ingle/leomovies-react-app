import React, { Component } from "react";
import Table from "./common/table";
import Like from "./common/like";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title"
    },
    { path: "genre.name", label: "Genre" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.isFavourite} onClick={() => this.props.onLike(movie)} />
      ),
    },
  ];

  deleteColumn = {
    key: "delete",
    content: (movie) => (
      <button 
        onClick={() => this.props.onDelete(movie)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    ),
  };

  addColumn = {
    key: "add",
    content: (movie) => (
      <button display={movie.isWatchlist? "none":""}
        onClick={() => this.props.onAdd(movie)}
        className="btn btn-danger btn-sm"
      >
        Watch Later
      </button>
    ),
  };

  constructor(props) {
    super(props);
    if (!props.isWatchlist) {
      this.columns.push(this.addColumn);
    } else this.columns.push(this.deleteColumn);
  }

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
