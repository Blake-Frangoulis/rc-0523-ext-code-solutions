import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  function handleCustomClick(text) {
    alert(text);
  }
  return (
    <div>
      <CustomButton
        text={'one'}
        color={'red'}
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        text={'two'}
        color={'blue'}
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        text={'three'}
        color={'green'}
        onCustomClick={handleCustomClick}
      />
    </div>
  );
}

export default App;
