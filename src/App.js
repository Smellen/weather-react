import './App.css';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import { useState } from 'react';

function App() {
  const [showSearch] = useState(true);

  return (
    <div className="App">
      <Header />
      { showSearch && <SearchInput showSearch = {showSearch}/>}
      
    </div>
  );
}

export default App;
