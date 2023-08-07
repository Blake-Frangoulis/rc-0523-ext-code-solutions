import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  return (
    <div>
      <CustomButton text={'one'} color={'red'} />
      <CustomButton text={'two'} color={'blue'} />
      <CustomButton text={'three'} color={'green'} />
    </div>
  );
}

export default App;
