import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { colors } from "../Color";
import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Icon from "@mdi/react";
import { mdiArrowLeftDropCircleOutline } from "@mdi/js";
import { useQuery } from "@apollo/client";
import { CURRENT_INTRODUCTION_QUERY } from "../graphql";
import Overview from "../components/MDX/Overview.tsx";

const IntroductionPage = () => {
  const navigate = useNavigate();
  const ref = useRef<any>();
  const { data, loading, error } = useQuery(CURRENT_INTRODUCTION_QUERY);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const introduction = JSON.parse(JSON.stringify(data?.CurrentIntroduction));
  const content = introduction.content;

  const handleEdit = () => {
    navigate("/Introduction/edit");
  };

  return (
    <>
      <div style={{ width: "95%", marginBottom: "30px", color: "white" }}>
        <div
          style={{
            width: "120px",
            height: "575px",
            position: "absolute",
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
                  color: "white",
                }}
              >
                <ListItemText style={{ color: "white" }}>MKS簡介</ListItemText>
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
                  color: "white",
                }}
              >
                <ListItemText style={{ color: "white" }}>
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
                <ListItemText style={{ color: "white" }}>
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
            <Button className="m-3" variant="outlined" onClick={handleEdit}>
              編輯
            </Button>
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
              <Overview markdown={content} overviewRef={ref} />
              <div style={{ height: "100px" }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroductionPage;
