import { useNavigate, useParams } from "react-router-dom";
import { ALL_ANNOUNCEMENT_QUERY, EDIT_ANNOUNCEMENT_MUTATION } from "../graphql";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  Dialog,
  Button,
  TextField,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const Announcements = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { loading, error, data } = useQuery(ALL_ANNOUNCEMENT_QUERY);
  const [admin, setAdmin] = useState(false);
  const [visible, setVisible] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const handleClose = () => {
    setVisible(false);
  };
  const handleEdit = () => {
    if (admin) setAdmin(false);
    else setAdmin(true);
  };

  const [editAnnouncement, { loading: editLoading, error: editError }] =
    useMutation(EDIT_ANNOUNCEMENT_MUTATION, {
      refetchQueries: [{ query: ALL_ANNOUNCEMENT_QUERY }],
    });

  const formSubmit = ({
    id,
    editTitle,
    editContent,
  }: {
    id: string | undefined;
    editTitle: string;
    editContent: string;
  }) => {
    if (editLoading) return "Submitting...";
    if (editError) return `Submission error! ${editError.message}`;
    if (!id) throw new Error("id is not defined");
    editAnnouncement({
      variables: {
        editAnnouncementId: parseInt(id),
        announcementInput: {
          title: editTitle,
          content: editContent,
        },
      },
    });
    setEditTitle("");
    setEditContent("");
    handleClose();
  };

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const announcements = data?.AllAnnouncements || [];
  return (
    <>
      {admin ? (
        <button className="text-gray-300" onClick={handleEdit}>
          isAdmin
        </button>
      ) : (
        <button className="text-gray-300" onClick={handleEdit}>
          notAdmin
        </button>
      )}
      <div
        className="m-3 border-2 border-sky-200"
        style={{ maxHeight: "400px", overflowY: "auto" }}
      >
        {announcements.map(
          (announcement) =>
            announcement !== null && (
              <>
                <div
                  key={announcement.id}
                  style={{
                    border: "1px solid #ccc",
                    margin: "10px",
                    padding: "10px",
                  }}
                >
                  <h2 className="text-white">{announcement.title}</h2>
                  <p className="text-gray-300">
                    Date: {new Date(announcement.date).toLocaleString()}
                  </p>
                  <p className="text-white">{announcement.content}</p>
                  {admin && (
                    <button
                      onClick={() =>
                        navigate(`/EditAnnouncement/${announcement.id}`)
                      }
                      className="text-sky-300"
                    >
                      EDIT
                    </button>
                  )}
                  {/* <br></br> */}
                  {/* {admin && <button onClick={handleDelete} >DELETE</button>} */}
                </div>
                <Dialog open={visible} onClose={handleClose}>
                  <DialogTitle>編輯公告</DialogTitle>
                  <DialogContent>
                    <DialogContentText>請填寫以下資訊:</DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="Title"
                      label="標題"
                      type="text"
                      fullWidth
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <TextField
                      margin="dense"
                      id="Content"
                      label="內文"
                      type="text"
                      fullWidth
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      取消
                    </Button>
                    <Button
                      onClick={() => formSubmit({ id, editTitle, editContent })}
                      color="primary"
                    >
                      提交
                    </Button>
                  </DialogActions>
                </Dialog>
              </>
            )
        )}
      </div>
    </>
  );
};
export default Announcements;
