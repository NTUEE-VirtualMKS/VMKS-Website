// import React from "react";
import Button from "@mui/material/Button";
import "../CSS/NavBar.css";
import {
  Link,
  // Navigate,
  useNavigate,
} from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import LogoImageURL from "../images/vmks_logo.png";

const buttonstyle = {
  backgroundColor: "#67b9c7ff",
  border: "3px solid #FFFFFF",
  borderBottomWidth: "0px",
  borderRightWidth: "0px",
  borderTopWidth: "0px",
  width: "90px",
  borderRadius: "0px",
  color: "white",
};
const buttonstyle2 = {
  backgroundColor: "#C4E4EA",
  borderRadius: "0px",
  width: "100%",
  color: "black",
};
const divstyle = {
  position: "absolute" as const,
  width: "87px",
  left: "3px",
  margin: "0px 0 0 0",
  zIndex: -1,
};

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav style={{ position: "relative", zIndex: 10 }}>
      <div id="header" className="button-container">
        <Link to="/">
          <img src={LogoImageURL} alt="logo" height="50" />
        </Link>
        <Button
          variant="contained"
          size="medium"
          style={{ float: "right", backgroundColor: "#67b9c7ff" }}
          onClick={() => navigate("/LoginPage")}
        >
          <Link
            to="/LoginPage"
            style={{ textDecoration: "none", color: "white" }}
          >
            Login
          </Link>
        </Button>
      </div>
      <Box>
        <AppBar position="static" style={{ backgroundColor: "#67B9C7" }}>
          <Toolbar
            style={{
              display: "flex",
              justifyContent: "flex-end",
              minHeight: "24px",
              position: "relative",
            }}
          >
            <dl>
              <dt>
                <Button
                  variant="text"
                  size="large"
                  style={buttonstyle}
                  onClick={() => navigate("/UserProfilePage")}
                >
                  Profile
                </Button>
              </dt>
            </dl>
            <dl>
              <dt>
                <Button
                  variant="text"
                  size="large"
                  style={buttonstyle}
                  onClick={() => navigate("/AuthorizedCodePage")}
                >
                  加簽碼
                </Button>
              </dt>
            </dl>
            <dl>
              <dt>
                <Button
                  variant="text"
                  size="large"
                  style={buttonstyle}
                  onClick={() => navigate("/IntroductionPage")}
                >
                  MKS介紹
                </Button>
              </dt>
            </dl>
            <Button
              variant="text"
              size="large"
              style={buttonstyle}
              onClick={() => navigate("MapPage")}
            >
              地圖導覽
            </Button>
            <dl>
              <dt>
                <Button
                  variant="text"
                  size="large"
                  style={buttonstyle}
                  onClick={() => navigate("/MaterialAndToolPage")}
                >
                  資源一覽
                </Button>
              </dt>
              <div style={divstyle}>
                <dd>
                  <Button
                    variant="text"
                    size="large"
                    style={buttonstyle2}
                    onClick={() => navigate("/")}
                  >
                    耗材
                  </Button>
                </dd>
                <dd>
                  <Button
                    variant="text"
                    size="large"
                    style={buttonstyle2}
                    onClick={() => navigate("/")}
                  >
                    材料
                  </Button>
                </dd>
                <dd>
                  <Button
                    variant="text"
                    size="large"
                    style={buttonstyle2}
                    onClick={() => navigate("/")}
                  >
                    工具
                  </Button>
                </dd>
                <dd>
                  <Button
                    variant="text"
                    size="large"
                    style={buttonstyle2}
                    onClick={() => navigate("/")}
                  >
                    機台
                  </Button>
                </dd>
              </div>
            </dl>
            <dl>
              <dt>
                <Button
                  variant="text"
                  size="large"
                  style={buttonstyle}
                  onClick={() => navigate("/TutorialPage")}
                >
                  新手教學
                </Button>
              </dt>
            </dl>
            <dl>
              <dt>
                <Button
                  variant="text"
                  size="large"
                  style={Object.assign(
                    { borderRightWidth: "3px" },
                    buttonstyle
                  )}
                  onClick={() => navigate("/advanced")}
                >
                  進階功能
                </Button>
              </dt>
            </dl>
            {/* <Link
                to="/advanced"
                style={{ textDecoration: "none", color: "white" }}
              >
                進階功能
              </Link> */}
          </Toolbar>
        </AppBar>
      </Box>
    </nav>
  );
};
