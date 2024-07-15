// TODO: delete announcement and connect with user's permission
import { useState } from "react";
import { useNavigate /* useParams */ } from "react-router-dom";
import {
  ALL_ANNOUNCEMENT_QUERY /* EDIT_ANNOUNCEMENT_MUTATION */,
} from "@/graphql";
import { useQuery } from "@apollo/client";
// import { useMutation } from "@apollo/client";
import LoaderSpinner from "./LoaderSpinner";
import { Button } from "@/components/ui/button";

function Announcements() {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(ALL_ANNOUNCEMENT_QUERY);
  const [admin, setAdmin] = useState(true);

  const handleEdit = () => {
    if (admin) setAdmin(false);
    else setAdmin(true);
  };

  const handleDelete = (id: number) => {
    console.log(id);
  };

  if (loading) return <LoaderSpinner />;
  if (error) throw new Error(`Error! ${error.message}`);

  const announcements = data?.AllAnnouncements || [];

  return (
    <>
      <h1 className="text-white mt-20">所有公告 All Announcements</h1>
      {announcements.length && (
        <div className="flex flex-col m-3 border-2 border-blue-600 rounded-xl max-h-[500px] overflow-y-auto">
          {announcements.map(
            (announcement) =>
              announcement !== null && (
                <div
                  key={announcement.id}
                  className="border border-gray-300 my-2.5 mx-3 p-2.5 rounded-xl cursor-pointer"
                >
                  <h2 className="text-white px-2">{announcement.title}</h2>
                  <p className="text-gray-400 text-base px-2">
                    Date: {new Date(announcement.date).toLocaleString()}
                  </p>
                  <p className="text-white text-lg px-2">
                    {announcement.content}
                  </p>
                  {admin && (
                    <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
                      <Button
                        onClick={() => handleDelete(announcement.id)}
                        className="text-red-400 border border-red-400 transform active:scale-90 transition-transform duration-200"
                      >
                        delete
                      </Button>
                      <Button
                        onClick={() =>
                          navigate(`/EditAnnouncement/${announcement.id}`)
                        }
                        className="text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200"
                      >
                        edit
                      </Button>
                    </div>
                  )}
                </div>
              )
          )}
        </div>
      )}
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
        {admin ? (
          <button
            className="p-2 mx-3 text-sky-300 rounded-lg border border-sky-300 transform active:scale-90 transition-transform duration-200 cursor-pointer"
            onClick={handleEdit}
          >
            is admin
          </button>
        ) : (
          <button
            className="p-2 mx-3 text-sky-300 rounded-lg border border-sky-300 transform active:scale-90 transition-transform duration-200 cursor-pointer"
            onClick={handleEdit}
          >
            not admin
          </button>
        )}
      </div>
    </>
  );
}
export default Announcements;
