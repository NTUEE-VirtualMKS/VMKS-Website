import React from "react";
import { Link } from "react-router-dom";

interface Article {
  id: string;
  writerId: string;
  description: string;
  imageURL: string;
  time: string;
  title: string;
  headline: string;
  content: string;
  userpic: string;
}

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="flex flex-col justify-center items-center border-b border-gray-200 py-4 last:border-b-0">
      <div>{article.title}</div>
      <div>{article.description}</div>
      <Link to={`/edit-post/${article.id}`}>Edit</Link>
    </div>
  );
};

export { ArticleCard };
