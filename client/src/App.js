import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
// import './assets/css/main.min.css';
import './App.css';
import './index.css';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';


function App() {

  const [isLoggedIn, setLoggedIn] = useState(false)
  const [getUser, setUser] = useState(false)

  useEffect(() => {
    // verifying login token
    let loginToken = localStorage.getItem('loginToken')

    if ( loginToken && !isLoggedIn ) {
      axios.post(process.env.REACT_APP_API_PATH + 'user/relogin', { token: loginToken }).then(response => {
        if ( !response.data.error ) {
          setLoggedIn(true)
          setUser(response.data.user)
        } else {
          localStorage.removeItem('loginToken')
        }
      }).catch(err => { if ( err ) console.error(err) })
    }
  })

  return (
    <main className="wrapper">
      <div className="flex justify-between">
        {(isLoggedIn) ? (
          <a onClick={() => {
            localStorage.removeItem('loginToken')
            setLoggedIn(false)
          }}>Logout</a>
        ) : ''}
      </div>
      <div className="w-full bg-white shadow-md h-screen">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              {
                ( isLoggedIn ) ? 
                <Home /> :
                <Login setLoggedIn={setLoggedIn} setUser={setUser} />
              }
            </Route>
            <Route path="/login">
              <Login setLoggedIn={setLoggedIn} setUser={setUser} />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </main>
  )
}

export default App;