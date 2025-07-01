import React from "react";
import BlogPostsGrid from "./BlogPostsGrid";
import BlogSidebar from "./BlogSidebar";
import BlogNewsletter from "./BlogNewsletter";
import bannerimg from "../assets/bannerimg/aboutBanner.jpg";
import Banner from "../Reuseable Com/Banner";

const BlogPage = () => {
  return (
    <>
     <Banner img={bannerimg}
      heading={"Our Archive"} />
    <div className="min-h-screen bg-[#0B050C] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="">
            <BlogPostsGrid />
          </main>

          {/* <aside className="lg:w-1/3">
            <BlogSidebar />
          </aside> */}
        </div>
      </div>

      <BlogNewsletter />
    </div>
    </>
  );
};

export default BlogPage;
