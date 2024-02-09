// import React from "react";
import { useNavigate } from "react-router-dom";
import { ALL_ANNOUNCEMENT_QUERY } from "../graphql";
import { useQuery } from "@apollo/client";
import type { AnnouncementInput } from "../../../backend/src/types/types";
import { useState } from "react";
// import { useMutation } from "@apollo/client";
import { Dialog, Button, TextField, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
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
  const [admin, setAdmin] = useState(false);
  // const [visible, setVisible] = useState(false);
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  // const [editId, setEditId] = useState(0);
  // const [editTitle, setEditTitle] = useState("");
  // const [editContent, setEditContent] = useState("");

  // const handleClose = () => {
  //   setVisible(false);
  // };
  const handleEdit = () => {
    if (admin) setAdmin(false);
    else setAdmin(true);
  };
  // const handleOpenEdit = (announcementId: number) => {
  //   const announcementToEdit = announcements.find(a => a?.id === announcementId);
  //   if (announcementToEdit) {
  //     setEditId(announcementId);
  //     setEditTitle(announcementToEdit.title ?? ""); // Use default value if title is null
  //     setEditContent(announcementToEdit.content ?? ""); // Use default value if content is null
  //     setVisible(true);
  //   }
  //   navigate(`/EditAnnouncement/${editId}`, {
  //     state: { editId, editTitle, editContent },
  //   });
  // };
  
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  // const [editAnnouncement, { loading:editLoading, error:editError }] = useMutation(
  //   EDIT_ANNOUNCEMENT_MUTATION,
  //   {
  //     refetchQueries: [{ query: ALL_ANNOUNCEMENT_QUERY }],
  //   }
  // );
  
  // const formSubmit = ({ id, editTitle, editContent }: { id: number; editTitle: string; editContent: string }) => {
  //   if(editLoading) return "Submitting...";
  //   if(editError) return `Submission error! ${editError.message}`;
  //   editAnnouncement({
  //     variables: {
  //       editAnnouncementId: id,
  //       announcementInput: {
  //         title: editTitle,
  //         content: editContent,
  //       },
  //     },
  //   });
  //   setEditTitle("");
  //   setEditContent("");
  //   handleClose();
  // };
  // const handleDelete = () => {
  //   // console.log("delete");
  // };
  const announcements = data?.AllAnnouncements || [];
  const navigate = useNavigate();
  return (
    <>
      {admin ? (
        <button onClick={handleEdit}>isAdmin</button>
      ) : (
        <button onClick={handleEdit}>notAdmin</button>
      )}
      <div className="m-3 border-2 border-sky-200" style={{ maxHeight: '400px', overflowY: 'auto' }}>       
        {announcements.map((announcement) => (
          announcement !== null && (
            <>
              <div key={announcement.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                <h2>{announcement.title}</h2>
                <p>Date: {new Date(announcement.date).toLocaleString()}</p>
                <p>{announcement.content}</p>
                {admin && <button onClick={() => navigate(`/EditAnnouncement/${announcement.id}`)} >EDIT</button>}
                {/* <br></br> */}
                {/* {admin && <button onClick={handleDelete} >DELETE</button>} */}
              </div>
              {/* <Dialog open={visible} onClose={handleClose}>
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
                  <Button onClick={() => formSubmit({ id, editTitle, editContent })} color="primary">
                    提交
                  </Button>
                </DialogActions>
              </Dialog> */}
            </>
          )
        ))}
      </div>
      
    </>
  );
};
export default Announcements;