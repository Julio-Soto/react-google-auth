import './App.css';
import {signInWithGoogle} from './firebase.js'

function App() {
  return (
    <div className="App">
      <h1>Hello Firebase</h1>
      <button onClick={signInWithGoogle}>Sign In</button>
    </div>
  );
}

export default App;
