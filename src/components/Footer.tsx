import React from 'react'
import { 
  Twitter, 
  Github, 
  Linkedin, 
  Globe 
} from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-light dark:text-primary-dark">
              News Aggregator
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Your go-to platform for the latest news across various categories. 
              Stay informed with real-time updates from trusted sources.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-light dark:text-primary-dark">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'Categories', 'About', 'Contact'].map(link => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-light dark:text-primary-dark">
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              {[
                { Icon: Twitter, url: 'https://x.com/codewithdhruba' },
                { Icon: Github, url: 'https://github.com/codewithdhruba01' },
                { Icon: Linkedin, url: 'https://www.linkedin.com/in/dhrubaraj-pati' },
                { Icon: Globe, url: 'https://codewithdhruba.netlify.app/' }
              ].map(({ Icon, url }) => (
                <a 
                  key={url} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark hover:scale-110 transition-all duration-300"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © {currentYear} News Aggregator. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer