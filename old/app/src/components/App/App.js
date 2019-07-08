import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import '../../assets/styles/main.scss';
import Homepage from '../../views/Homepage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Portfolio from '../../views/PortfolioPage';
// import ContactPage from '../../views/ContactPage';
export class App extends Component {
  render() {
    return (
      <>
        <Header />

        <Router>
          <Switch>
            <Route path="/" component={Homepage} />
            <Route path="/Portfolio" component={Portfolio} />
          </Switch>
        </Router>

        <Footer />
      </>
    );
  }
}

export default App;
