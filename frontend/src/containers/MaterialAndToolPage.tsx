import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MaterialList } from "../components/MaterialAndTool/MaterialList";
import { colors } from "../Color";
import Icon from "@mdi/react";
import { mdiArrowLeftDropCircleOutline } from "@mdi/js";
import { ALL_MATERIAL_QUERY } from "../graphql/queries";
import { ADD_MATERIAL_MUTATION } from "../graphql/mutations";
import { useMutation } from "@apollo/client";
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import TextArea from "../components/MDX/TextArea";
import { placeholder } from "../markdown/placeholder";

const MaterialAndToolPage = () => {
  const navigate = useNavigate();
  const ref = useRef<any>();
  const [visible, setVisible] = useState(false);
  const [materialDetail, setMaterialDetail] = useState(placeholder);
  const [addMaterial, { loading, error }] = useMutation(ADD_MATERIAL_MUTATION, {
    refetchQueries: [{ query: ALL_MATERIAL_QUERY }],
  });
  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const handleAddNewMaterial = (materialDetail: string) => {
    if (loading) return "Submitting...";
    if (error) return `Submission error! ${error.message}`;
    addMaterial({
      variables: {
        materialInput: {
          name: materialDetail.split("\n")[0].split("#")[1].trim(),
          description: materialDetail.split("\n")[2].split("##")[1].trim(),
          photoLink: materialDetail
            .split("\n")[4]
            .split("![](")[1]
            .split(")")[0]
            .trim(),
          category: materialDetail.split("\n")[6].split("類別: ")[1].trim(),
          valuable:
            materialDetail.split("\n")[8].split("要錢: ")[1].trim() === "true"
              ? true
              : false,
          position: materialDetail
            .split("\n")[10]
            .split("擺放位置: ")[1]
            .trim(),

          usage: parseInt(
            materialDetail.split("\n")[12].split("使用量: ")[1].trim()
          ),
          remain: parseInt(
            materialDetail.split("\n")[14].split("剩餘數量: ")[1].trim()
          ),
          fee: parseInt(
            materialDetail.split("\n")[16].split("價錢: ")[1].trim()
          ),
          tutorialLink: "",
          partName: "",
        },
      },
    });
    setMaterialDetail("");
    handleClose();
  };

  return (
    <>
      <div style={{ width: "95%", marginBottom: "30px" }}>
        {/* <div
          style={{
            width: "120px",
            height: "520px",
            position: "absolute",
            backgroundColor: "#C4E4EA",
          }}
        ></div> */}

        <div className="ml-44">
          <br></br>
          <div className="flex items-center">
            <button
              onClick={() => navigate("/")}
              className="transparent border-none m-4 cursor-pointer"
            >
              {/* <Icon
                path={mdiArrowLeftDropCircleOutline}
                size={3}
                color={colors.DarkSlateGray}
              /> */}
            </button>
            <h1 style={{ margin: "0 auto", color:"white"}}>| 資源一覽 |</h1>
            <Button className="m-3" variant="outlined" onClick={handleOpen}>
              新增材料
            </Button>

            <Dialog open={visible} onClose={handleClose}>
              <DialogTitle>新增材料</DialogTitle>
              <DialogContent>
                <TextArea editorRef={ref} markdown={materialDetail} />
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={handleClose}
                  color="primary"
                  variant="outlined"
                >
                  取消
                </Button>
                <Button
                  onClick={() =>
                    handleAddNewMaterial(ref.current?.getMarkdown())
                  }
                  color="primary"
                  variant="outlined"
                >
                  提交
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <div className="m-5">
            <MaterialList />
          </div>
        </div>
      </div>
    </>
  );
};

export default MaterialAndToolPage;
