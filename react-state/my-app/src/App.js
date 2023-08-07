import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div>
      <ToggleButton text={'btn 1'} color={'red'} />
      <ToggleButton text={'btn 2'} color={'green'} />
      <ToggleButton text={'btn 3'} color={'blue'} />
    </div>
  );
}

export default App;
