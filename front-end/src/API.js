import axios from 'axios';

export const api = axios.create({
  baseURL: "http://localhost:3001",
});


export const requestPost = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
}

export const requestGet = async (endpoint) => {
  const { data } = await api.get(endpoint);
  console.log(data);
  return data;
}