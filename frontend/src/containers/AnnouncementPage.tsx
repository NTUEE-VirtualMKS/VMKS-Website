import { useNavigate } from "react-router-dom";
import { useState, FunctionComponent } from "react";
import { ADD_ANNOUNCEMENT_MUTATION } from "../graphql";
import { useMutation } from "@apollo/client";
import { AnnouncementInput } from "../../../backend/src/types/types";

const AnnouncementPage = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [counter, setCounter] = useState(0);

  /* Wang's pervious code
  let counts=0;
  const formSubmit = () => {
    counts++;
    const newAnnouncement = document.createElement("a");
    const tmp = document.getElementById("Title") as HTMLInputElement;
    newAnnouncement.textContent = tmp.value;
    newAnnouncement.href = "/Announcement/"+counts;
    setTitle("");
    setContent("");
    setVisible(false);
  }
  */

  const [addAnnouncement, { loading, error }] = useMutation(
    ADD_ANNOUNCEMENT_MUTATION
  );
  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

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
    setVisible(false);
  };

  return (
    <>
      <div>公告一覽</div>
      <p>應該要有所有公告連結</p>
      <div id="announcements">
        <a href={"/Announcement/" + counter}>範例公告</a>
      </div>

      <button onClick={() => setVisible(true)}>新增公告</button>

      {visible && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formSubmit({ title, content });
          }}
        >
          <p>標題</p>
          <input
            id="Title"
            value={title}
            onChange={(e) => setTitle((e.target as HTMLInputElement).value)}
          />
          <p>內文</p>
          <input
            id="Content"
            value={content}
            onChange={(e) => setContent((e.target as HTMLInputElement).value)}
          />
          <br></br>
          <br></br>
          <button type="submit">提交</button>
          <button onClick={() => setVisible(false)}>取消</button>
        </form>
      )}

      <br></br>
      <button onClick={() => navigate(-1)}>go back</button>
    </>
  );
};

export default AnnouncementPage as FunctionComponent;
