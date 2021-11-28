import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './Components/Index';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import Homedashboard from './Components/Homedashboard';
const App = () => {
    return (
        <>
          <Router>
              <Switch>
                  <Route exact path='/'>
                      <Index />
                  </Route>
                  <Route exact path='/login'>
                      <LogIn />
                  </Route>
                  <Route exact path='/signup'>
                      <SignUp />
                  </Route>
                  <Route exact path='/dashboard'>
                      <Homedashboard />
                  </Route>
              </Switch>
          </Router>
        </>
    )
}

export default App
