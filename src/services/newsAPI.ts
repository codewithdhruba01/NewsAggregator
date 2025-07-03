import axios from 'axios'
import { NewsResponse } from '../types/news'

const API_KEY = import.meta.env.VITE_NEWS_API_KEY
const BASE_URL = import.meta.env.VITE_NEWS_API_URL

export const fetchNews = async (category?: string, query?: string): Promise<NewsResponse> => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        apiKey: API_KEY,
        category: category || '',
        q: query || '',
        language: 'en',
      }
    })
    return response.data
  } catch (error) {
    console.error('Error fetching news:', error)
    throw error
  }
}