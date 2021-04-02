import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
// import './assets/css/main.min.css';
import './App.css';
import Header from './components/Header';
import './index.css';
import Game from './views/Game';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Terms from './views/Terms';
import Profile from './views/Profile';


function App() {

  const [isLoggedIn, setLoggedIn] = useState(false)
  const [getUser, setUser] = useState(false)

  useEffect(() => {
    // verifying login token
    let loginToken = localStorage.getItem('loginToken')

    if ( loginToken && !isLoggedIn ) {
      axios.post(process.env.REACT_APP_API_PATH + 'user/relogin', { token: loginToken }).then(response => {
        if ( !response.data.error ) {
          setUser(response.data.user)
          setLoggedIn(true)
        } else {
          logout()
        }
      }).catch(err => { if ( err ) console.error(err) })
    }
  })

  const logout = () => {
    setLoggedIn(false)
    setUser(false)
    localStorage.removeItem("loginToken")
  }

  const home = ( isLoggedIn ) ? <Redirect to="/game" /> : <Home />
  const game = ( !isLoggedIn ) ? <Home /> : <Game />
  const terms = ( !isLoggedIn ) ? <Home /> : <Terms />
  const profile = ( !isLoggedIn ) ? <Home /> : <Profile user={getUser}/>

  return (
    <main className="wrapper">
      <div className="w-full bg-white shadow-md min-h-screen">
        <BrowserRouter>
        <Header user={getUser} isLoggedIn={isLoggedIn} logoutAction={logout} />
          <Switch>
            <Route exact path="/">
              { home }
            </Route>
            <Route path="/login">
              <Login setLoggedIn={setLoggedIn} setUser={setUser} />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/game">
              { game }
            </Route>
            <Route path="/terms">
              { terms }
            </Route>
            <Route path="/profile">
              { profile }
            </Route>
            <Route path="*">
              <Login setLoggedIn={setLoggedIn} setUser={setUser} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </main>
  )
}

export default App;