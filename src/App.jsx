import { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import Form from './components/Form';
import Card from './components/Card';
import Alert from './components/Alert';
import useAlert from './hooks/useAlert';

function App() {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [weather, setWeather] = useState({});

  const { showAlert, messages } = useAlert();

  // calling the api
  const callingTheApi = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${
      import.meta.env.VITE_APIKEY
    }&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);

      if (data.cod === '404') {
        showAlert({
          apiError: 'City not found, try another',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { apiError } = messages;

  return (
    <>
      <Header />

      <div className="container">
        <div className="grid">
          <Form
            city={city}
            country={country}
            setCity={setCity}
            setCountry={setCountry}
            callingTheApi={callingTheApi}
          />

          {apiError ? (
            // <div className="city-alert">
            <Alert message={apiError} />
          ) : (
            // </div>
            <Card weather={weather} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
