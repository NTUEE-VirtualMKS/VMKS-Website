import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { colors } from "../Color";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Icon from "@mdi/react";
import { mdiArrowLeftDropCircleOutline } from "@mdi/js";
import TextArea from "./MDX/TextArea.tsx";
import { useMutation, useQuery } from "@apollo/client";
import {
  CURRENT_INTRODUCTION_QUERY,
  INTRODUCTION_UPDATE_MUTATION,
} from "../graphql";
import { Button, Stack } from "@mui/material";

const EditIntroduction = () => {
  const navigate = useNavigate();
  const ref = useRef<any>();
  const { data, loading, error } = useQuery(CURRENT_INTRODUCTION_QUERY);
  const introduction = JSON.parse(JSON.stringify(data?.CurrentIntroduction));
  const content = introduction.content;
  const [
    updateIntroduction,
    { loading: introductionLoading, error: introductionError },
  ] = useMutation(INTRODUCTION_UPDATE_MUTATION, {
    refetchQueries: [{ query: CURRENT_INTRODUCTION_QUERY }],
  });
  const handleSave = async (content: string) => {
    if (introductionLoading) return "Loading...";
    if (introductionError) return `Error! ${introductionError.message}`;
    await updateIntroduction({
      variables: { introductionInput: { content: content } },
    });
    navigate(-1);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
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
            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                onClick={() => handleSave(ref.current?.getMarkdown())}
              >
                儲存
              </Button>
              <Button variant="outlined" onClick={handleCancel}>
                取消
              </Button>
            </Stack>
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
              <TextArea editorRef={ref} markdown={content} />
              <div style={{ height: "100px" }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditIntroduction;
