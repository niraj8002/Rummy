import React from 'react';

const BlogSidebar = () => {
  // Sample data for popular posts and categories
  const popularPosts = [
    { id: 1, title: "How to Count Cards in Rummy", views: "12.5k" },
    { id: 2, title: "Rummy Variations Around the World", views: "9.8k" },
    { id: 3, title: "Bankroll Management for Rummy Players", views: "7.2k" },
    { id: 4, title: "Common Rummy Mistakes to Avoid", views: "6.5k" },
  ];

  const categories = [
    { name: "Strategies", count: 24 },
    { name: "Tournaments", count: 15 },
    { name: "News", count: 18 },
    { name: "Tips", count: 32 },
    { name: "Rules", count: 8 },
  ];

  return (
    <div className="space-y-8">
      {/* Search Box */}
      <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg">
        <h3 className="text-lg font-bold mb-3">Search Articles</h3>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search rummy articles..." 
            className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button className="absolute right-2 top-2 text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Popular Posts */}
      <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg">
        <h3 className="text-lg font-bold mb-3">Popular Articles</h3>
        <ul className="space-y-3">
          {popularPosts.map(post => (
            <li key={post.id} className="border-b border-gray-700 pb-3 last:border-0 last:pb-0">
              <a href="#" className="flex justify-between items-center hover:text-yellow-400 transition">
                <span className="truncate pr-2">{post.title}</span>
                <span className="text-xs bg-purple-600 px-2 py-1 rounded-full">{post.views}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Categories */}
      <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg">
        <h3 className="text-lg font-bold mb-3">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index}>
              <a href="#" className="flex justify-between items-center hover:text-yellow-400 transition">
                <span>{category.name}</span>
                <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">{category.count}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-yellow-500 to-red-500 p-4 rounded-lg text-center">
        <h3 className="font-bold text-lg mb-2 text-black">Play Rummy Now!</h3>
        <p className="text-sm mb-3 text-gray-800">Join thousands of players and win real cash prizes</p>
        <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-gray-900 transition">
          Download App
        </button>
      </div>
    </div>
  );
};

export default BlogSidebar;