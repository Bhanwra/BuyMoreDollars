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
import Lost from './views/Lost';
import Win from './views/Win';
import History from './views/History';


function App() {

  const [isLoggedIn, setLoggedIn] = useState(false)
  const [getUser, setUser] = useState(false)
  const [amountWon, setAmountWon] = useState(0)

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
  const game = ( !isLoggedIn ) ? <Redirect to="/" /> : <Game user={getUser} setAmountWon={setAmountWon} />
  const profile = ( !isLoggedIn ) ? <Redirect to="/" /> : <Profile user={getUser}/>
  const history = ( !isLoggedIn ) ? <Redirect to="/" /> : <History user={getUser} />

  const header = <Header user={getUser} isLoggedIn={isLoggedIn} logoutAction={logout} />

  return (
    <main className="wrapper overflow-y-auto">
      <div className="w-full bg-white shadow-md min-h-screen">
        <BrowserRouter>
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
              { header }
              { game }
            </Route>
            <Route path="/terms">
              { isLoggedIn && header }
              <Terms />
            </Route>
            <Route path="/profile">
              { header }
              { profile }
            </Route>
            <Route path="/win">
              { header }
              <Win amountWon={amountWon}/>
            </Route>
            <Route path="/lost">
              { header }
              <Lost/>
            </Route>
            <Route path="/history">
              { header }
              { history }
            </Route>
            <Route path="*">
              <Login setLoggedIn={setLoggedIn} user={setUser} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </main>
  )
}

export default App;