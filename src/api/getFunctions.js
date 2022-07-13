import axios from 'axios';

const getPositions = async () => {
  const response = await axios.get(
    'https://frontend-test-assignment-api.abz.agency/api/v1/positions'
  );
  return response.data.positions;
};

const getToken = async () => {
  const response = await axios.get(
    'https://frontend-test-assignment-api.abz.agency/api/v1/token'
  );
  return response.data.token;
};

export { getPositions, getToken };
