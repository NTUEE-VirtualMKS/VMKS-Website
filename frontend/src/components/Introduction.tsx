import "../CSS/Intro.css";
import { useState } from "react";
import { /*Link, Navigate,*/ useNavigate } from "react-router-dom";
// import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const cardstyle = {
  height: 150,
  width: "50%",
  padding: 15,
  verticalAlign: "top",
  boxSizing: "content-box" as const,
  border: "2px solid rgb(100,100,100)",
};

const boxstyle = {
  margin: "auto",
  marginTop: "50px",
  marginBottom: "50px",
  width: "84%",
  borderWidth: "3px",
  textAlign: "center",
};

const buttonstyle = {
  display: "block",
  padding: 0,
  margin: "auto",
  marginBottom: 10,
  fontSize: 18,
  fontWeight: "bold",
};

const linkstyle = {
  textDecorationLine: "none",
  color: "#67b9c7",
  padding: "0px 10px",
};

const ul = {
  borderRadius: "30px 0px 0px 0px",
  borderRight: "1px solid rgb(100,100,100)",
  borderBottom: "1px solid rgb(100,100,100)",
};

const ur = {
  borderRadius: "0px 30px 0px 0px",
  borderLeft: "1px solid rgb(100,100,100)",
  borderBottom: "1px solid rgb(100,100,100)",
};

const ll = {
  borderRadius: "0px 0px 0px 30px",
  borderTop: "1px solid rgb(100,100,100)",
  borderRight: "1px solid rgb(100,100,100)",
};

const lr = {
  borderRadius: "0px 0px 30px 0px",
  borderTop: "1px solid rgb(100,100,100)",
  borderLeft: "1px solid rgb(100,100,100)",
};

const hover = {
  color: "#999999",
};
export const Introduction = () => {
  const navigate = useNavigate();
  const [state, set] = useState(Boolean(false));
  const change = () => {
    set(Boolean(true));
  };
  const change2 = () => {
    set(Boolean(false));
  };
  return (
    <Box sx={boxstyle}>
      <div style={{ margin: "20px 0px 20px 0px", display: "inline", color: "white", }}>
        <h2 style={{ marginBottom: "30px", fontSize: "28px", color: "white" }}>
          {" "}
          Introduction{" "}
        </h2>
      </div>
      <table
        style={{
          borderCollapse: "separate" as const,
          borderSpacing: 0,
          width: "100%",
          color: "white"
        }}
        className="intro"
      >
        <tbody>
          <tr>
            <td
              style={Object.assign(
                {},
                cardstyle,
                ul
              )} /*onMouseOver={()=>change()} onMouseOut={()=>change2()}*/
            >
              <Button
                style={buttonstyle}
                onClick={() => navigate("../MaterialAndToolPage")}
              >
                <div style={linkstyle}>Disposable Material</div>
              </Button>
              <Typography>I'm disposable</Typography>
            </td>
            <td style={Object.assign({}, cardstyle, ur)}>
              <Button
                style={buttonstyle}
                onClick={() => navigate("../MaterialAndToolPage")}
              >
                <div style={linkstyle}>Material</div>
              </Button>
              <Typography>UI</Typography>
            </td>
          </tr>
          <tr className="intro">
            <td style={Object.assign({}, cardstyle, ll)}>
              <Button
                style={buttonstyle}
                onClick={() => navigate("../MaterialAndToolPage")}
              >
                <div style={linkstyle}>Tool</div>
              </Button>
              <Typography>Don't be a tool guy (工具人)</Typography>
            </td>
            <td style={Object.assign({}, cardstyle, lr)}>
              <Button
                style={buttonstyle}
                onClick={() => navigate("../MaterialAndToolPage")}
              >
                <div style={linkstyle}>Machine</div>
              </Button>
              <Typography>Learning</Typography>
            </td>
          </tr>
        </tbody>
      </table>
    </Box>
  );
};
