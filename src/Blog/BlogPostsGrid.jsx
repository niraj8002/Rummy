import React, { useEffect, useState } from "react";
import BlogPostCard from "./BlogPostCard";
import image from "../assets/GameCard/card4.png";
import { FaRegNewspaper } from "react-icons/fa6";
import Banner from "../Reuseable Com/Banner";

const BlogPostsGrid = () => {
  // Sample blog posts data
  // const blogPosts = [
  //   {
  //     id: 1,
  //     title: "10 Advanced Rummy Strategies to Win Big",
  //     excerpt:
  //       "Learn these pro strategies to dominate your next Rummy game and increase your winning chances significantly.",
  //     category: "Strategies",
  //     date: "May 15, 2023",
  //     readTime: "8 min read",
  //     image: image,
  //   },
  //   {
  //     id: 2,
  //     title: "Rummy Tournament Season 2023: What's New",
  //     excerpt:
  //       "Discover the exciting changes in this year's tournament season with bigger prizes and new game modes.",
  //     category: "Tournaments",
  //     date: "May 10, 2023",
  //     readTime: "5 min read",
  //     image: image,
  //   },
  //   {
  //     id: 3,
  //     title: "The Psychology Behind Rummy: Reading Your Opponents",
  //     excerpt:
  //       "Understand the mental aspects of Rummy and learn how to predict your opponents' moves.",
  //     category: "Strategies",
  //     date: "May 5, 2023",
  //     readTime: "6 min read",
  //     image: image,
  //   },
  //   {
  //     id: 4,
  //     title: "Mobile Rummy: Tips for Playing On The Go",
  //     excerpt:
  //       "Optimize your mobile Rummy experience with these essential tips and tricks for smartphone players.",
  //     category: "Tips",
  //     date: "April 28, 2023",
  //     readTime: "4 min read",
  //     image: image,
  //   },
  // ];
  const [blogPosts, setAllblog] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://cms.sevenunique.com/apis/blogs/get-blogs.php?website_id=6&status=2",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
            },
          }
        );

        const data = await res.json();
        console.log(data.data);
        setAllblog(data.data);
      } catch (error) {
        console.log("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold  pb-2 text-[#db8990] drop-shadow-[0_0_5px_#a855f7] md:drop-shadow-[0_0_10px_#a855f7] flex items-center gap-2 justify-cente my-9 p-5 ">
          <FaRegNewspaper /> Latest blog
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button className="bg-purple-600 hover:bg-purple-700 hover:text-yellow-400 text-white font-bold py-2 px-6 rounded-md transition">
            Load More Articles
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogPostsGrid;
