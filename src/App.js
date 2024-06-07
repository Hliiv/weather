import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { fetchWeatherData, getAddressLocation } from './utilities.js';
import Weather from './Weather.js';
import NewLocation from './NewLocation.js';

function App() {
  const [cities, setCities] = useState([
    {
      name: 'Tallinn',
      weatherData: null
    },

    {
      name: 'Pärnu',
      weatherData: null
    },

    {
      name: 'Tartu',
      weatherData: null
    },
  ]);

  const AddLocation = (Location) => {
    setCities([...cities,
    {
      name: Location,
      weatherData: null
    }
    ])
    setIsAddingActive(false);
  }
  setCities([...cities, newCity]);
}

const [weather, setWeather] = useState(null);
const [isAddingActive, setIsAddingActive] = useState(false);

const [selectedCity, setSelectedCity] = useState('');

const rowClicked = async (id) => {
  console.log('Click on row ' + cities[id].lat)
  setIsAddingActive(false);
  const locationData = await getAddressLocation(cities[id].name);
  console.log(locationData);
  const dataObj = await fetchWeatherData({
    lat: locationData.lat,
    long: locationData.lng,

  })
  console.log(dataObj);

  setWeather(dataObj);

  setSelectedCity(cities[id].name);
};

let rightPaneJsx = (
  <>
    <h1>Weather </h1>
    <Weather weather={weather} />
  </>)

if (isAddingActive) {
  rightPaneJsx = <NewLocation AddLocation={AddLocation} />
}

return (
  <>
    <Container>
      <Row>
        <Col>
          <h1>Cities</h1>
          {cities.map((city, index) => (
            <div key={index} onClick={() => rowClicked(index)}>
              {city.name}
            </div>
          ))}
          <button className='btn btn-link'
            onClick={
              () => setIsAddingActive(true)
            }>Add new city</button>
        </Col>
        <Col>
           <rightPaneJsx selectedCity={selectedCity} />
        </Col>
      </Row>
    </Container>
  </>
);


export default App;
