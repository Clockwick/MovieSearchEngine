import { Navbar } from 'components/Navbar';
import { Home } from 'pages/Home';
import { MovieDetail, MovieList } from 'pages/Movie';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={MovieList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
