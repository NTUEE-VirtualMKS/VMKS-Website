import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { colors } from "../Color";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Icon from "@mdi/react";
import { mdiArrowLeftDropCircleOutline } from "@mdi/js";
import { brief_intro } from "../markdown/brief_intro.ts";
import TextArea from "../components/MDX/TextArea.tsx";
import Overview from "../components/MDX/Overview.tsx";
const IntroductionPage = () => {
  const navigate = useNavigate();
  const ref = useRef<any>();
  const [introduction, setIntroduction] = useState(brief_intro);
  const [admin, setAdmin] = useState(false);
  const handleEdit = () => {
    if (admin) setAdmin(false);
    else setAdmin(true);
  };
  /* const sessionA = useRef(null);
  const sessionB = useRef(null);
  const sessionC = useRef(null);
  */
  /*const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };*/

  return (
    <>
      <div style={{ width: "95%", marginBottom: "30px" }}>
        <div
          style={{
            width: "120px",
            height: "575px",
            position: "absolute",
            backgroundColor: "#C4E4EA",
          }}
        >
          <List style={{ paddingTop: "0" }}>
            <ListItem disablePadding>
              <ListItemButton
                // onClick={() => scrollToSection(sessionA)}
                style={{
                  border: "3px solid #3D96A5",
                  borderBottomWidth: "0px",
                  borderTopWidth: "0px",
                  borderRightWidth: "0px",
                  borderRadius: "0px",
                  textAlign: "center",
                  marginTop: "0",
                  marginLeft: "0",
                }}
              >
                <ListItemText style={{ color: colors.DarkSlateGray }}>
                  MKS簡介
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                // onClick={() => scrollToSection(sessionB)}
                style={{
                  border: "3px solid #3D96A5",
                  borderBottomWidth: "0px",
                  borderRightWidth: "0px",
                  borderRadius: "0px",
                  textAlign: "center",
                }}
              >
                <ListItemText style={{ color: colors.DarkSlateGray }}>
                  管理員班表
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                // onClick={() => scrollToSection(sessionC)}
                style={{
                  border: "3px solid #3D96A5",
                  borderRadius: "0px",
                  borderRightWidth: "0px",
                  textAlign: "center",
                }}
              >
                <ListItemText style={{ color: colors.DarkSlateGray }}>
                  使用者規範
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </div>

        <div style={{ marginLeft: "180px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              onClick={() => navigate(-1)}
              style={{
                backgroundColor: "transparent",
                border: "none",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            >
              <Icon
                path={mdiArrowLeftDropCircleOutline}
                size={3}
                color={colors.DarkSlateGray}
              />
            </button>
            <h1 className="my-0 mx-auto">MKS介紹</h1>
            {admin ? (
              <button onClick={handleEdit}>isAdmin</button>
            ) : (
              <button onClick={handleEdit}>notAdmin</button>
            )}
          </div>
          <div
            style={{
              border: "#7C7C7C solid 2px",
              borderRadius: "20px",
              padding: "20px",
              margin: "20px",
              width: "95%",
              height: "380px",
            }}
          >
            <div
              style={{
                maxHeight: "95% ",
                overflow: "auto",
                padding: "5px",
              }}
            >
              {admin ? (
                <TextArea editorRef={ref} markdown={introduction} />
              ) : (
                <Overview markdown={introduction} overviewRef={ref} />
              )}
              <div style={{ height: "100px" }}></div>
            </div>
          </div>
        </div>
      </div>
      {/* <center>
        <button onClick={() => navigate(-1)}>go back</button>
      </center>
      <br></br> */}
    </>
  );
};

export default IntroductionPage;
