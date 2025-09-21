import React, { useEffect, useState } from "react";

interface Blog {
  id: number;
  title: string;
  body: string;
  date: string;
  readTime: string;
  image: string;
}

const BlogSection: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
        const response = await fetch("https://dummyjson.com/posts");
        const data = await response.json();

        const formatted = data.posts.slice(0, 6).map((post: any) => ({
          id: post.id,
          title: post.title,
          body: post.body,
          date: "Aug 2025",
          readTime: "5 min read", 
          image: `https://picsum.photos/seed/${post.id}/300/200`, // random placeholder image
        }));

        setBlogs(formatted);
    };

    fetchBlogs();
  }, []);

  return (
    <section className="my-10 px-4">
      <h2 className="text-2xl font-bold mb-1">Latest Articles</h2>
      <p className="text-gray-600 mb-6">
        Diverse Range of articles related to HTML, CSS, and JavaScript
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-32 h-32 object-cover"
            />
            <div className="p-4 flex flex-col justify-between">
              <h3 className="font-semibold text-lg">{blog.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-2">{blog.body}</p>
              <span className="text-gray-500 text-xs mt-2">
                {blog.date} | {blog.readTime}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
