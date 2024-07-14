import { ANNOUNCEMENT_CREATED_SUBSCRIPTION } from "../graphql";
import { useSubscription } from "@apollo/client";
import LoaderSpinner from "./LoaderSpinner";

export const AnnouncementCreatedSubscription = () => {
  const { loading, error, data } = useSubscription(
    ANNOUNCEMENT_CREATED_SUBSCRIPTION
  );
  if (loading) return <LoaderSpinner />;
  if (error) throw new Error(`Error! ${error.message}`);

  return (
    <div>
      <h2>New Announcement:{data?.AnnouncementCreated?.title}</h2>
      <p>date:{data?.AnnouncementCreated?.date}</p>
      <p>content:{data?.AnnouncementCreated?.content}</p>
    </div>
  );
};

const AnnouncementCreated = () => {
  return <></>;
};

export default AnnouncementCreated;
