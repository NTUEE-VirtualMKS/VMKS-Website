// import React from "react";
import { useNavigate } from "react-router-dom";
import { ALL_ANNOUNCEMENT_QUERY } from "../graphql";
import { useQuery } from "@apollo/client";

const AllAnnouncements = () => {
  const { loading, error, data } = useQuery(ALL_ANNOUNCEMENT_QUERY);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return <div>{JSON.stringify(data?.AllAnnouncements)}</div>;
};

const Announcement = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>{AllAnnouncements()}</div>
      <button onClick={() => navigate(-1)}>go back</button>
    </>
  );
};

export default Announcement;
