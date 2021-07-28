import React,{useEffect} from "react";
import Header from "./Header";
import Home from "./Home";
import './index.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Checkout from "./Checkout";
import Login from "./Login";
import {auth} from './firebase'
import {useGlobalContext} from './context'
import Payment from "./Payment";
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from "./Orders";
import SingleCategory from "./SingleCategory";

const promise = loadStripe('pk_test_51JH39xSG1XYZtY4doSVYLMKY6CHtfUhsZzIO7eZuTVz39PcINfCznC7Nf6nWu9UuiKaBODxjqzLxEQw87hePvJzK00i3Gr34gG')

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

              <Route path='/payment'>
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </Route>

              <Route path='/orders'>
                <Orders />
              </Route>

              <Route path='/category/:categoryItem' children={<SingleCategory />}></Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
