import React from "react";
import { Link } from "react-router-dom";

const BlogPostCard = ({ post }) => {
  return (
    <div className="bg-[#180f1a] bg-opacity-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      <Link to={`/blog/post/${post.id}`}>
        <div className="relative h-48 overflow-hidden p-1">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
          <div className="absolute bottom-0 left-0 bg-purple-600 text-white px-3 py-1 text-xs font-semibold ">
            {post.category}
          </div>
        </div>
      </Link>

      <div className="p-5">
        <div className="flex justify-between items-center text-sm text-gray-300 mb-2">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>

        <Link to={`/blog/post/${post.id}`}>
          <h3 className="text-[1.2rem] font-bold mb-2 hover:text-yellow-400 transition">
            {post.title}
          </h3>
        </Link>

        <p className="text-gray-300 mb-4 text-[14px]">{post.excerpt}</p>

        <Link
          to={`/blog/post/${post.id}`}
          className="inline-block text-yellow-400 hover:text-yellow-300 font-medium transition"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;
