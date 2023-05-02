import './App.css'; 
import {Introduction} from './components/Introduction.js';

function App() {
  let name = "fall" 
  // find a way to create a name as string
  // place it into introduction props.
  return (
    <div className="App">
     <div className = "Intro"> 
      <Introduction
        name = {name}
        title="app"
      />
     </div>
    </div>
  );
}

export default App;
