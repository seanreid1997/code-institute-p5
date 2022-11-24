import Button from 'react-bootstrap/Button';
import styles from "./styles/Test.module.css";
import './App.css';

function App() {
  return (
    <div className={styles.Test}>
      <Button variant="primary">Primary</Button>
      <h1>Hello world</h1>
    </div>
  );
}

export default App;