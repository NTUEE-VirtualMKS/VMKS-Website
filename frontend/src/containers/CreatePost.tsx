import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_ARTICLE_MUTATION, UPDATE_ARTICLE_MUTATION } from '../graphql/mutations';
import { GET_ARTICLE_BY_ID_QUERY } from '../graphql/queries';
import { useParams, useNavigate } from 'react-router-dom';
import { ApolloError } from '@apollo/client';
import { useToast } from "@/components/ui/use-toast";

const CreatePost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  // State for all possible fields
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [description, setDescription] = useState('');

  const [addArticle] = useMutation(ADD_ARTICLE_MUTATION);
  const [updateArticle] = useMutation(UPDATE_ARTICLE_MUTATION);
  const { loading, error, data } = useQuery(GET_ARTICLE_BY_ID_QUERY, {
    variables: { id },
    skip: !id,
  });

  useEffect(() => {
    if (data && data.GetArticleById) {
      setTitle(data.GetArticleById.title);
      setContent(data.GetArticleById.content);
      setDescription(data.GetArticleById.description);
    }
  }, [data]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const articleInput = {
      title,
      content,
      description,
      headline: false,
      writerId: "11075cd3-3de3-4740-8331-09685b7cb70d"
      // Add any other fields that your Prisma schema requires
    };

    try {
      if (id) {
        await updateArticle({ variables: { updateArticleId: id, articleInput } });
      } else {
        await addArticle({ variables: { articleInput } });
      }
      navigate('/BlogDashboard');
    } catch (err) {
      if (err instanceof ApolloError) {
        console.error('GraphQL Error:', err.graphQLErrors);
        console.error('Network Error:', err.networkError);
        toast({
          title: "Error saving article",
          description: err.message,
          variant: "destructive",
        });
      } else {
        console.error('Unexpected error:', err);
        toast({
          title: "Unexpected error",
          description: "An unexpected error occurred while saving the article.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">{id ? 'Update' : 'Create'} Post</button>
    </form>
  );
};

export { CreatePost };
