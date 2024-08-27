import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_ARTICLES_QUERY } from '../graphql/queries';
import { Link } from 'react-router-dom';

const BlogDashboard: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ALL_ARTICLES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Blog Dashboard</h1>
      <Link to="/create-post">Create New Post</Link>
      {data?.GetAllArticles?.articles?.filter(Boolean)?.map((article) => (
        <div key={article!.id} className='flex flex-col justify-center items-center border-b border-gray-200 py-4 last:border-b-0'>
          <div>{article!.title}</div>
          <div>{article!.description}</div>
          <Link to={`/edit-post/${article!.id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
};

export { BlogDashboard };
