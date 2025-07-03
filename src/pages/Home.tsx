import React, { useState, useEffect } from 'react'
import NewsCard from '../components/NewsCard'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import { fetchNews } from '../services/newsAPI'
import { Article } from '../types/news'

const Home: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadNews()
  }, [])

  const loadNews = async (category?: string, query?: string) => {
    try {
      setLoading(true)
      const response = await fetchNews(category, query)
      setArticles(response.articles)
      setError(null)
    } catch (err) {
      setError('Failed to fetch news. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (query: string) => {
    loadNews(undefined, query)
  }

  const handleCategorySelect = (category: string) => {
    loadNews(category)
  }

  if (loading) return <div className="text-center mt-10">Loading...</div>
  if (error) return <div className="text-red-500 text-center mt-10">{error}</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">News Aggregator</h1>
      <SearchBar onSearch={handleSearch} />
      <CategoryFilter onSelectCategory={handleCategorySelect} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
      {articles.length === 0 && (
        <p className="text-center text-gray-500">No articles found.</p>
      )}
    </div>
  )
}

export default Home