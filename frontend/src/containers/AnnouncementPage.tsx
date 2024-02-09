import { useNavigate } from "react-router-dom";
import { useState } from "react";
import type { FunctionComponent } from "react";
import { ADD_ANNOUNCEMENT_MUTATION } from "../graphql";
import { useMutation } from "@apollo/client";
import type { AnnouncementInput } from "../../../backend/src/types/types";
import Announcement from "../components/Announcement";
import {
  Dialog,
  Button,
  TextField,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { ALL_ANNOUNCEMENT_QUERY } from "../graphql";
const AnnouncementPage = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [counter, setCounter] = useState(0);

  const [addAnnouncement, { loading, error }] = useMutation(
    ADD_ANNOUNCEMENT_MUTATION,
    {
      refetchQueries: [{ query: ALL_ANNOUNCEMENT_QUERY }],
    }
  );
  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;
  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };
  const formSubmit = ({ title, content }: AnnouncementInput) => {
    setCounter((c) => (c += 1));
    addAnnouncement({
      variables: {
        announcementInput: {
          title: title,
          content: content,
        },
      },
    });
    setTitle("");
    setContent("");
    handleClose();
  };

  return (
    <>
      <div className="flex justify-center m-3">公告一覽</div>

      <div id="announcements">
        <Announcement />
      </div>

      <Button className="m-3" variant="outlined" onClick={handleOpen}>
        新增公告
      </Button>

      <Dialog open={visible} onClose={handleClose}>
        <DialogTitle>新增公告</DialogTitle>
        <DialogContent>
          <DialogContentText>請填寫以下資訊:</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="Title"
            label="標題"
            type="text"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            margin="dense"
            id="Content"
            label="內文"
            type="text"
            fullWidth
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            取消
          </Button>
          <Button
            onClick={() => formSubmit({ title, content })}
            color="primary"
          >
            提交
          </Button>
        </DialogActions>
      </Dialog>

      <div className="flex justify-center m-3">
        <Button variant="outlined" onClick={() => navigate(-1)}>
          返回
        </Button>
      </div>
    </>
  );
};

export default AnnouncementPage as FunctionComponent;
