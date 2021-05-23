import { Provider } from "react-redux";
import Search from "./views/Search";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./views/routes";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
