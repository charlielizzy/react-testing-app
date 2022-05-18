import "./App.css";
import Banner from "./components/Banner/Banner";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TodoPage from "./pages/TodoPage/TodoPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Banner />
        <Switch>
          <Route strict exact path="/" component={TodoPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
