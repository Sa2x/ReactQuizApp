import "./App.css";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import { Provider } from "react-redux";
import Questions from "./pages/Questions";
import Game from "./pages/Game";
import store from "./redux/store";
import HighScore from "./pages/HighScore";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Quiz App";
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route exact path="/">
              <Redirect to="/game" />
            </Route>
            <Route path="/game">
              <Game />
            </Route>
            <Route path="/questions">
              <Questions />
            </Route>
            <Route path="/highscore">
              <HighScore />
            </Route>
          </Layout>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
