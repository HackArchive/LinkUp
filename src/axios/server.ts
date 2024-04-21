import axios from 'axios'

export const server = axios.create({
  baseURL: 'http://192.168.1.10:3001/api',
  headers: {
    'Content-Type': 'application/json',
  },
})