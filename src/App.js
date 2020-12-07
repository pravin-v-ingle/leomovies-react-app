import React, { Component } from "react";
import { Route, Redirect, Switch,BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./components/movies";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import WatchListMovies from './components/watchlist';

class App extends Component {
  state = {};

  componentDidMount() {
   
  }

  render() {
    return (
      <BrowserRouter>
      <ToastContainer />
      <NavBar  />
        <main className="container">
          <Switch>
            <Route
              path="/movies"
              render={props => <Movies {...props}  />}
            />
            <Route path="/watchlist" component={WatchListMovies} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
        </BrowserRouter>
    );
  }
}

export default App;
