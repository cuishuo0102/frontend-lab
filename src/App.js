import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Counter } from './labs/counter/Counter';
import { Calculator } from './labs/calculator/Calculator';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/calculator">
          <Calculator />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
