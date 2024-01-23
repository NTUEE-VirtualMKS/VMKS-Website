// import React from "react";
import { useNavigate } from "react-router-dom";
import { ALL_ANNOUNCEMENT_QUERY } from "../graphql";
import { useQuery } from "@apollo/client";

// const AllAnnouncements = () => {
//   const { loading, error, data } = useQuery(ALL_ANNOUNCEMENT_QUERY);
//   if (loading) return "Loading...";
//   if (error) return `Error! ${error.message}`;

//   return <div>{JSON.stringify(data?.AllAnnouncements)}</div>;
// };

// const Announcement = () => {
//   // const navigate = useNavigate();
//   return (
//     <>
//       <div>{AllAnnouncements()}</div>
//       {/* <button onClick={() => navigate(-1)}>go back</button> */}
//     </>
//   );
// };
// export default Announcement;

const Announcements = () => {
  const { loading, error, data } = useQuery(ALL_ANNOUNCEMENT_QUERY);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const announcements = data?.AllAnnouncements || [];

  return (
    <div className="m-3 border-2 border-sky-200" style={{ maxHeight: '400px', overflowY: 'auto' }}>
      {announcements.map((announcement) => (
        announcement !== null && (
          <div key={announcement.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h2>{announcement.title}</h2>
            <p>Date: {new Date(announcement.date).toLocaleString()}</p>
            <p>{announcement.content}</p>
          </div>
        )
      ))}
    </div>
  );
};
export default Announcements;