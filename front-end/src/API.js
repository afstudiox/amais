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
  return data;
}

export const requestGetOne = async (endpoint, id) => {
  const { data } = await api.get(`${endpoint}/${id}`);
  return data;
}

export const requestPut = async (endpoint, body) => {
  const { data } = await api.put(endpoint, body);
  return data;
}