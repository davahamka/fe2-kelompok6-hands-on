import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store";
import "./App.css";
import Search from "./pages/search";
import Trending from "./pages/trending";
import Header from "./components/Header";
import GifDetail from "./pages/gif-detail";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/trending">
            <Trending />
          </Route>
          <Route exact path="/gif/:id">
            <GifDetail />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
