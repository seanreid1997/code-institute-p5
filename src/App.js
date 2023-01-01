import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div>
      <HomePage />
      <Container>
        <Switch>
          <Route exact path="/" render={() => <h1>home</h1>} />
          <Route exact path="/login" render={() => <h1>login</h1>} />
          <Route exact path="/signup" render={() => <h1>signup</h1>} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;