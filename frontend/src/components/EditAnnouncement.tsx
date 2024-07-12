import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { EDIT_ANNOUNCEMENT_MUTATION, ALL_ANNOUNCEMENT_QUERY } from "../graphql";
import { useState } from "react";
import {
  Dialog,
  Button,
  TextField,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import LoaderSpinner from "./LoaderSpinner";

const EditAnnouncement = () => {
  const { id } = useParams();
  if (!id) throw new Error("id is undefined");
  const navigate = useNavigate();
  const {
    loading: queryLoading,
    error: queryError,
    data,
  } = useQuery(ALL_ANNOUNCEMENT_QUERY);

  const allAnnouncements = JSON.parse(JSON.stringify(data?.AllAnnouncements));
  const announcement = allAnnouncements.find((a: any) => a.id === parseInt(id));
  const [visible, setVisible] = useState(true);
  const [editTitleNow, setEditTitleNow] = useState(announcement.title);
  const [editContentNow, setEditContentNow] = useState(announcement.content);

  const handleClose = () => {
    setVisible(false);
    navigate(`/AnnouncementPage`);
  };

  const [editAnnouncement, { loading: editLoading, error: editError }] =
    useMutation(EDIT_ANNOUNCEMENT_MUTATION, {
      refetchQueries: [{ query: ALL_ANNOUNCEMENT_QUERY }],
    });

  const formSubmit = ({
    editTitleNow,
    editContentNow,
  }: {
    editTitleNow: string;
    editContentNow: string;
  }) => {
    if (!id) throw new Error("id is undefined");
    if (editLoading) return "Submitting...";
    if (editError) return `Submission error! ${editError.message}`;
    editAnnouncement({
      variables: {
        editAnnouncementId: parseInt(id),
        announcementInput: {
          title: editTitleNow,
          content: editContentNow,
        },
      },
    });
    handleClose();
    navigate(`/AnnouncementPage`);
  };

  if (queryLoading) return <LoaderSpinner />;
  if (queryError) return <div>{queryError.message}</div>;

  return (
    <>
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
            value={editTitleNow}
            onChange={(e) => setEditTitleNow(e.target.value)}
          />
          <TextField
            margin="dense"
            id="Content"
            label="內文"
            type="text"
            fullWidth
            value={editContentNow}
            onChange={(e) => setEditContentNow(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            取消
          </Button>
          <Button
            onClick={() => formSubmit({ editTitleNow, editContentNow })}
            color="primary"
          >
            提交
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default EditAnnouncement;
