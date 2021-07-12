import React from "react";
import Header from "./Header";
import Home from "./Home";
import './index.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
        <div className="App">
          {/* header */}
          <Header />
          <Switch>
              <Route exact path='/'>
                {/* home */}
                <Home />
              </Route>

              <Route path='/checkout'>
                <Checkout />
              </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
