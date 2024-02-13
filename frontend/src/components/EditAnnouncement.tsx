// import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
// import { ALL_ANNOUNCEMENT_QUERY } from "../graphql/queries";
// import { useLocation } from 'react-router-dom';
import { EDIT_ANNOUNCEMENT_MUTATION, ALL_ANNOUNCEMENT_QUERY } from "../graphql";
// import { useQuery } from "@apollo/client";
// import type { AnnouncementInputType } from "../shared/type.ts";
import { useState } from "react";
// import { useMutation } from "@apollo/client";
import {
  Dialog,
  Button,
  TextField,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
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
  //   const location = useLocation();
  //   const { state } = location;

  // Access the passed parameters
  //   const { editId, editTitle, editContent } = state || {};

  //   const { loading, error, data } = useQuery(ALL_ANNOUNCEMENT_QUERY);
  //   const [admin, setAdmin] = useState(false);
  const [visible, setVisible] = useState(true);
  //   const [title, setTitle] = useState("");
  //   const [content, setContent] = useState("");
  //   const [editIdNow, setEditIdNow] = useState(editId);
  const [editTitleNow, setEditTitleNow] = useState(announcement.title);
  const [editContentNow, setEditContentNow] = useState(announcement.content);

  const handleClose = () => {
    setVisible(false);
    navigate(`/AnnouncementPage`);
  };
  //   const handleEdit = () => {
  //     if (admin) setAdmin(false);
  //     else setAdmin(true);
  //   };
  //   const handleOpenEdit = (announcementId: number) => {
  //     const announcementToEdit = announcements.find(a => a?.id === announcementId);
  //     if (announcementToEdit) {
  //       setEditId(announcementId);
  //       setEditTitle(announcementToEdit.title ?? ""); // Use default value if title is null
  //       setEditContent(announcementToEdit.content ?? ""); // Use default value if content is null
  //       setVisible(true);
  //     }
  //   };

  //   if (loading) return "Loading...";
  //   if (error) return `Error! ${error.message}`;
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
    // setEditTitle("");
    // setEditContent("");
    handleClose();
    navigate(`/AnnouncementPage`);
  };
  // const handleDelete = () => {
  // console.log("delete");
  // };
  //   const announcements = data?.AllAnnouncements || [];
  if (queryLoading) return <div>Loading...</div>;
  if (queryError) return <div>{queryError.message}</div>;

  return (
    <>
      {/* <div className="m-3 border-2 border-sky-200" style={{ maxHeight: '400px', overflowY: 'auto' }}> */}
      {/* {admin ? (
          <button onClick={handleEdit}>isAdmin</button>
        ) : (
          <button onClick={handleEdit}>notAdmin</button>
        )}

        {announcements.map((announcement) => (
          announcement !== null && ( */}
      {/* <> */}
      {/* <button key={announcement.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }} onClick={() => navigate(`/EditAnnouncement/${announcement.id}`)}>
                <h2>{announcement.title}</h2>
                <p>Date: {new Date(announcement.date).toLocaleString()}</p>
                <p>{announcement.content}</p>
                {admin && <button onClick={() => handleOpenEdit(announcement.id)} >EDIT</button>}
                <br></br>
                {admin && <button onClick={handleDelete} >DELETE</button>}
              </button> */}
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
    //       )
    //     ))}
    //   </div>

    // </>
  );
};
export default EditAnnouncement;
