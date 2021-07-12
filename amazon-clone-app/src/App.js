import React,{useEffect} from "react";
import Header from "./Header";
import Home from "./Home";
import './index.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Checkout from "./Checkout";
import Login from "./Login";
import {auth} from './firebase'
import {useGlobalContext} from './context'

function App() {

  const {setUser} = useGlobalContext()

  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      console.log('the user is ', authUser)
      if(authUser){
        setUser(authUser)
      }else{
        setUser(null)
      }
    })
  },[])

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

              <Route path='/login'>
                <Login />
              </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
