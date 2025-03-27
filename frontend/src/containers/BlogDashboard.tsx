import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_ARTICLES_QUERY } from "../graphql/queries";
import { Link } from "react-router-dom";

const BlogDashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredArticles, setFilteredArticles] = useState<any[]>([]);
  const { loading, error, data } = useQuery(GET_ALL_ARTICLES_QUERY, {
    fetchPolicy: "cache-and-network",
  });

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filtered = data?.GetAllArticles?.articles?.filter((article: any) =>
      article?.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredArticles(filtered || []);
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error)
    return (
      <p className="text-center mt-10 text-red-500">Error: {error.message}</p>
    );

  const displayArticles =
    filteredArticles.length > 0
      ? filteredArticles
      : data?.GetAllArticles?.articles;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Blog Dashboard
        </h1>
        <Link
          to="/create-post"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 shadow-md"
        >
          Create New Post
        </Link>
      </div>
      <form onSubmit={handleSearch} className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search posts by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayArticles?.filter(Boolean)?.map((article) => (
          <div
            key={article!.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <Link to={`/post/${article!.id}`}>
              <img
                src={article!.imageURL}
                alt={article!.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {article!.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {article!.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(article.time).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </Link>
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <Link
                to={`/edit-post/${article!.id}`}
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { BlogDashboard };
