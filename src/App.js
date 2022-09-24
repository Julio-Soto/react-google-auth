import './App.css';
import {signInWithGoogle} from './firebase.js'
import { store } from './store'

function App() {
  return (
    <div className="App">
      <button onClick={signInWithGoogle}>Sign In</button>
      <h1>{store.getState().name}</h1>
      <h1>{store.getState().email}</h1>
      <h1>{store.getState().imageURL}</h1>
      <img src='store.getState().imageURL' alt='user'></img>
    </div>
  );
}

export default App;
