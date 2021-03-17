import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import WithMaterialUI from './components/registerForm';
import ApiKey from './components/apikey';
import AppBarApi from './components/appbar';

function App() {
  return (
    <div className="App">
        <AppBarApi/>
        <BrowserRouter>
        <Switch>
        <Route path="/key/:id">
            <ApiKey />
          </Route>
          <Route path="/">
            <WithMaterialUI />
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
