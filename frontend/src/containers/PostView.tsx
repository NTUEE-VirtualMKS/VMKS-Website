import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ARTICLE_BY_ID_QUERY } from "../graphql/queries";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

const PostView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery(GET_ARTICLE_BY_ID_QUERY, {
    variables: { getArticleByIdId: id },
  });

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error)
    return (
      <p className="text-center mt-10 text-red-500">Error: {error.message}</p>
    );

  const article = data?.GetArticleById;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/BlogDashboard"
        className="text-blue-500 hover:text-blue-600 mb-4 inline-block"
      >
        &larr; Back to Dashboard
      </Link>
      {article!.imageURL && (
        <img
          src={article!.imageURL}
          alt={article!.title}
          className="w-full h-64 object-cover mb-4 rounded-lg"
        />
      )}
      <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
        {article!.title}
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {article!.description}
      </p>
      <div className="prose dark:prose-invert max-w-none">
        <ReactMarkdown>{article!.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export { PostView };
