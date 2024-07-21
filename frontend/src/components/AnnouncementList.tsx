import { useNavigate } from "react-router-dom";
import {
  ALL_ANNOUNCEMENT_QUERY,
  DELETE_ANNOUNCEMENT_MUTATION,
} from "@/graphql";
import { useQuery, useMutation } from "@apollo/client";
import LoaderSpinner from "./LoaderSpinner";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { useToast } from "./ui/use-toast";

function AnnouncementList() {
  const navigate = useNavigate();
  const { user } = useUser();
  const { toast } = useToast();
  const { loading, error, data } = useQuery(ALL_ANNOUNCEMENT_QUERY);
  const [deleteAnnouncement, { loading: deleteLoading, error: deleteError }] =
    useMutation(DELETE_ANNOUNCEMENT_MUTATION, {
      refetchQueries: [{ query: ALL_ANNOUNCEMENT_QUERY }],
    });

  if (loading) return <LoaderSpinner />;
  if (error) {
    toast({ title: `${error.message}`, variant: "destructive" });
  }

  const announcements = data?.AllAnnouncements || [];

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this announcement?")) {
      deleteAnnouncement({
        variables: {
          deleteAnnouncementId: id,
        },
      });
      if (deleteLoading) return <LoaderSpinner />;
      if (deleteError) {
        toast({ title: `${deleteError.message}`, variant: "destructive" });
      } else {
        toast({ title: "Announcement deleted successfully!" });
      }
    }
  };
  return (
    <>
      {announcements.length && (
        <div className="flex flex-col mx-3 border-2 border-blue-600 rounded-xl max-h-[500px] overflow-y-auto">
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
                    {announcement.content.length > 350
                      ? announcement.content.slice(0, 350) + "..."
                      : announcement.content}
                  </p>
                  {user?.isAdmin && (
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
    </>
  );
}
export default AnnouncementList;
