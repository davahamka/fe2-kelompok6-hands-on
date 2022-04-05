import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Home from "./pages/home";
import Search from "./pages/search";

function App() {
  return (
    <Provider store={store}>
      <Search />
    </Provider>
  );
}

export default App;
