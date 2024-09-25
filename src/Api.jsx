import axios from 'axios';

const API_URL = 'https://mhsw3wvx-8080.brs.devtunnels.ms/translate';

export const getAllTranslations = () => {
  return axios.get(`${API_URL}/all`);
};

export const getLastTranslation = () => {
  return axios.get(`${API_URL}/last`);
};

export const addTranslation = (translation) => {
  return axios.post(API_URL, translation, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const editTranslation = (id, updatedData) => {
  return axios.put(`${API_URL}/edit/${id}`, updatedData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const deleteTranslation = (id) => {
  return axios.delete(`${API_URL}/delete/${id}`);
};

export const getAllActives = () => {
  return axios.get(`${API_URL}/actives`);
};

export const getAllInactives = () => {
  return axios.get(`${API_URL}/inactives`);
};

export const getTranslationById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const activateTranslation = (id) => {
  return axios.put(`${API_URL}/activate/${id}`);
};

export const pingDatabase = () => {
  return axios.get(`${API_URL}/ping`);
};

export const getPreview = () => {
  return axios.get(`${API_URL}/preview`);
};
