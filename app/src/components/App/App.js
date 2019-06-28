import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../../assets/styles/main.scss';
import Homepage from '../../views/Homepage';
// import ContactPage from '../../views/ContactPage';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        {/* <Route path="/contact" component={ContactPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
