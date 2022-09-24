import './App.css';
import {signInWithGoogle} from './firebase.js'
import {useSelector} from 'react-redux'

function App() {
  const name = useSelector(state => state.name)
  const email = useSelector(state => state.email)
  const imageURL = useSelector(state => state.imageURL)

  return (
    <div className="App">
      <button onClick={signInWithGoogle}>Sign In</button>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{imageURL}</h1>
      <img src={imageURL} alt='user'></img>
    </div>
  );
}

export default App;
