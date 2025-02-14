import axios from 'axios';

const fetchFlights = async (origin, destination, date) => {
  const options = {
    method: 'GET',
    url: 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchFlights',
    params: {
      origin,
      destination,
      date,
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data; // Adjust based on API response structure
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch flights');
  }
};

export default fetchFlights;
