import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import FlightList from './components/FlightList';
import { fetchFlights } from './api/fetchFlights';

function App() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (origin, destination, date) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchFlights(origin, destination, date);
      setFlights(data);
    } catch (err) {
      setError('Failed to fetch flights. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Google Flights Clone</h1>
      <SearchForm onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <FlightList flights={flights} />
    </div>
  );
}

export default App;
