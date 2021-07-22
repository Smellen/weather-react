import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import SearchInput from './components/SearchInput';
import { useState } from 'react';

function App() {
  const [showSearchButton] = useState(true);

const searchPlace = (place) => {
  console.log('saerching: ', place)
}

  return (
    <div className="App">
      <Header />
      <SearchInput />
      {showSearchButton && <Button text='Search' />}
    </div>
  );
}

export default App;
