import './App.css';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [showSearch] = useState(true);
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY_NAME;

  if (apiKey === '') {
    console.log('if');
    return (
      <div className="App">
        <p>Please set the weather api key.</p>
        <p>The .env file is located in the root project folder.</p>
        <p>The environment variable is <b>REACT_APP_WEATHER_API_KEY_NAME</b></p>
        <p>Weather API key required: <a href="https://openweathermap.org/api">openweathermap.org</a></p>

        <Footer />
      </div>
    );
  } else {
    console.log('else');
    return (
      <div className="App">
        <Header />

        {showSearch && <SearchInput showSearch={showSearch} />}
        <Footer />
      </div>
    );
  }
}

export default App;
