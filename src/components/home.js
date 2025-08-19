import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Logo from './logo';
import SearchBar from './searchBar';
import RecentPosts from './recentPosts';
import Results from './results'; // importa Results correctamente

function Home() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <Logo />
            <SearchBar />
            <RecentPosts />
          </div>
        </Route>
        <Route path="/results">
          <Results />
        </Route>
      </Switch>
    </Router>
  );
}

export default Home;