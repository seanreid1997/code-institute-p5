import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import RegisterForm from "./components/Register";
import './api/axiosDefaults'
import LoginForm from "./components/Login";

function App() {
  return (
    <div>
      <HomePage />
      <Container>
        <Switch>
          <Route exact path="/" render={() => <h1>home</h1>} />
          <Route exact path="/login" render={() => <LoginForm />} />
          <Route exact path="/register" render={() => <RegisterForm />} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;