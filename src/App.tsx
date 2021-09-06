import React from 'react';
import { Navbar } from 'components/Navbar';
import { Home } from 'pages/Home';
import { MovieList } from 'pages/Movie';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { WindowProvider } from 'contexts/WindowContext';
const App = (): JSX.Element => {
  return (
    <WindowProvider>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={MovieList} />
        </Switch>
      </Router>
    </WindowProvider>
  );
};

export default App;
