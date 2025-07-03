import React from 'react'
import { Article } from '../types/news'

interface NewsCardProps {
  article: Article
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString()
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      {article.urlToImage && (
        <img 
          src={article.urlToImage} 
          alt={article.title} 
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {article.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          {article.description?.slice(0, 100)}...
        </p>
        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <span>{article.source.name}</span>
          <span>{formatDate(article.publishedAt)}</span>
        </div>
        <a 
          href={article.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-2 inline-block text-blue-600 hover:underline"
        >
          Read More
        </a>
      </div>
    </div>
  )
}

export default NewsCard