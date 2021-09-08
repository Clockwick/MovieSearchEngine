import React from 'react';
import { Navbar } from 'components/Navbar';
import { Home } from 'pages/Home';
import { MovieList } from 'pages/Movie';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { WindowProvider } from 'contexts/WindowContext';
// import { Background } from 'components/Background';
import { BackgroundProvider } from 'contexts/BackgroundContext';
const App = (): JSX.Element => {
  return (
    <WindowProvider>
      <BackgroundProvider>
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movies" component={MovieList} />
          </Switch>
        </Router>
      </BackgroundProvider>
    </WindowProvider>
  );
};

export default App;
