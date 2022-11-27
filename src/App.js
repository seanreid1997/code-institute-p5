import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <Container>
        <Switch>
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;