import React from 'react';
import { Navbar } from 'components/Navbar';
import { Home } from 'pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { WindowProvider } from 'contexts/WindowContext';
import { BackgroundProvider } from 'contexts/BackgroundContext';
const App = (): JSX.Element => {
  return (
    <WindowProvider>
      <BackgroundProvider>
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </BackgroundProvider>
    </WindowProvider>
  );
};

export default App;
