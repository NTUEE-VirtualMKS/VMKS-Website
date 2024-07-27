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

  const handleDelete = async (id: number) => {
    await deleteAnnouncement({
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
  };
  return (
    <>
      {announcements.length !== 0 ? (
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
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button className="text-red-400 border border-red-400 transform active:scale-90 transition-transform duration-200">
                            delete
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="text-white bg-black">
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Are you absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will
                              permanently delete the announcement.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="text-sky-300 border border-sky-300 transform active:scale-90 transition-transform duration-200 bg-transparent hover:bg-primary/90 hover:text-sky-300">
                              cancel
                            </AlertDialogCancel>
                            <AlertDialogAction
                              className="text-red-400 border border-red-400 transform active:scale-90 transition-transform duration-200 bg-transparent hover:bg-primary/90"
                              onClick={() => handleDelete(announcement.id)}
                            >
                              continue
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
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
      ) : (
        <section className="flex flex-col size-full flex-center">
          <div className="flex-center w-full flex-col mt-36">
            <p className="w-full text-5xl text-center font-bold text-white p-2">
              No Announcement
            </p>
          </div>
        </section>
      )}
    </>
  );
}
export default AnnouncementList;
