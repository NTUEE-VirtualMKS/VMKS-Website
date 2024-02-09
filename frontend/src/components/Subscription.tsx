// import { useNavigate } from "react-router-dom";
import { ANNOUNCEMENT_CREATED_SUBSCRIPTION } from "../graphql";
import { useSubscription } from "@apollo/client";

export const AnnouncementCreatedSubscription = () => {
  const { loading, error, data } = useSubscription(
    ANNOUNCEMENT_CREATED_SUBSCRIPTION
  );
  if (loading) return "No new Announcement";
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <h2>New Announcement:{data?.AnnouncementCreated?.title}</h2>
      <p>date:{data?.AnnouncementCreated?.date}</p>
      <p>content:{data?.AnnouncementCreated?.content}</p>
    </div>
  );
};

const AnnouncementCreated = () => {
  // const navigate = useNavigate();
  return <>{/* <div>{AnnouncementCreatedSubscription()}</div> */}</>;
};

export default AnnouncementCreated;
