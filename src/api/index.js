import axios from 'axios'

const baseURL = 'https://api.alquran.cloud/'

export const quranAPI = axios.create({
    baseURL,
    headers:{
        'Content-type': 'application/json'
    }
});