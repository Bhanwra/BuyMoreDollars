import './assets/css/main.min.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from './views/Form';
import Home from './views/Home';
import Button from './components/Button';
import Column from './components/Column';
import Container from './components/Container';
// import Input from './components/Input';
import Row from './components/Row';
function App() {



  return (
    (
      <BrowserRouter>

        <Switch>
          <Route exact path="/"><Home></Home>
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/Form"><Form></Form>
          </Route>
        </Switch>
      </BrowserRouter>
    )
  );
}

export default App;