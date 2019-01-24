import React, { Component } from 'react';
import Layout from '../Layout';
import Home from '../Home';
import Page2 from '../Page2';
import Page3 from '../Page3';
import DynamicPage from '../DynamicPage';
import NotFound from '../NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/page-2" exact component={Page2} />
            <Route path="/page-3" exact render={() => <Page3 />} />
            <Route path="/page-:id" exact component={DynamicPage} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
