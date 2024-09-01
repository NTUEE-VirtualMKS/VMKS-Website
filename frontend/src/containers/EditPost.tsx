import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  ADD_ARTICLE_MUTATION,
  UPDATE_ARTICLE_MUTATION,
} from "../graphql/mutations";
import {
  GET_ARTICLE_BY_ID_QUERY,
  GET_ALL_USERS_QUERY,
} from "../graphql/queries";
import { useParams, useNavigate } from "react-router-dom";
import { ApolloError } from "@apollo/client";
import { useToast } from "@/components/ui/use-toast";
import ReactMarkdown from "react-markdown"; // Importing Markdown renderer
import { DELETE_ARTICLE_MUTATION } from "../graphql/mutations";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const EditPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  // State for all possible fields
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [imageURL, setImageURL] = useState("");

  const [addArticle] = useMutation(ADD_ARTICLE_MUTATION);
  const [updateArticle] = useMutation(UPDATE_ARTICLE_MUTATION);
  const [deleteArticle] = useMutation(DELETE_ARTICLE_MUTATION);
  const { loading: loadingUsers, error: errorUsers, data: dataUsers } = useQuery(GET_ALL_USERS_QUERY, {
    variables: {},
  });

    // Fetch existing article data if we're editing
    const { loading, error, data } = useQuery(GET_ARTICLE_BY_ID_QUERY, {
      variables: { "getArticleByIdId": id },
      skip: !id, // Skip this query if there's no id (i.e., we're creating a new post)
    });

    useEffect(() => {
      console.log("Loading:", loading);
      console.log("Data:", data);
      if (loading) {
        setIsLoading(true);
      } else if (id && data && data.GetArticleById) {
        console.log("Setting form data:", data.GetArticleById);
        setTitle(data.GetArticleById.title || "");
        setContent(data.GetArticleById.content || "");
        setDescription(data.GetArticleById.description || "");
        setImageURL(data.GetArticleById.imageURL || "");
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    }, [id, loading, data]);

    if (loadingUsers) return <p>Loading...</p>;
    if (errorUsers) return <p>Error: {errorUsers.message}</p>;

    const users = dataUsers?.GetAllUsers?.users || [];

    //console.log("Users:", users);

    if (isLoading && id) {
      return <div>Loading...</div>;
    }

  const userAdmin = users.find((user: any) => user.isAdmin === true);
  //console.log("User Admin:", userAdmin);
  const adminUsersId = userAdmin!.id;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const articleInput = {
      title,
      content,
      description,
      imageURL,
      headline: false,
      writerId: adminUsersId, // Change writerId to admin.id
      // Add any other fields that your Prisma schema requires
    };

    try {
      if (id) {
        await updateArticle({
          variables: { updateArticleId: id, articleInput },
        });
      } else {
        await addArticle({ variables: { articleInput } });
      }
      navigate("/BlogDashboard", { state: { refresh: true } });
    } catch (err) {
      if (err instanceof ApolloError) {
        console.error("GraphQL Error:", err.graphQLErrors);
        console.error("Network Error:", err.networkError);
        toast({
          title: "Error saving article",
          description: err.message,
          variant: "destructive",
        });
      } else {
        console.error("Unexpected error:", err);
        toast({
          title: "Unexpected error",
          description: "An unexpected error occurred while saving the article.",
          variant: "destructive",
        });
      }
    }
  };

  const handleDelete = async () => {
    if (!id) return;

    try {
      await deleteArticle({
        variables: { deleteArticleId: id },
      });
      toast({
        title: "Post deleted successfully",
        variant: "default",
      });
      navigate("/BlogDashboard");
    } catch (err) {
      if (err instanceof ApolloError) {
        console.error("GraphQL Error:", err.graphQLErrors);
        console.error("Network Error:", err.networkError);
        toast({
          title: "Error deleting article",
          description: err.message,
          variant: "destructive",
        });
      } else {
        console.error("Unexpected error:", err);
        toast({
          title: "Unexpected error",
          description: "An unexpected error occurred while deleting the article.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="container mx-auto mt-10 p-5">
    <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
      {id ? "Update Post" : "Create Post"}
    </h2>
    <div className="flex flex-col md:flex-row gap-6">
      <form onSubmit={handleSubmit} className="flex-1">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Description
          </label>
          <textarea
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Content (Markdown supported)
          </label>
          <textarea
            rows={10}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter content"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Image URL
          </label>
          <input
            type="text"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            placeholder="Enter image URL"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            {id ? "Update" : "Create"} Post
          </button>
          {id && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button
                  type="button"
                  className="w-full ml-4 py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Delete Post
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent className="dark:text-white dark:bg-black">
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your post.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-gray-300 text-gray-800 hover:bg-gray-400 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700 transition duration-300 ease-in-out">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 transition duration-300 ease-in-out"
                    onClick={handleDelete}
                  >
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </div>

      </form>

      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Preview</h3>
        <div className="p-4 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700 overflow-auto max-h-[calc(100vh-200px)]">
          <ReactMarkdown className="prose dark:prose-invert max-w-none">{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  </div>
  );
};

export { EditPost };


