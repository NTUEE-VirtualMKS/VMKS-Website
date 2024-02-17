import { useNavigate } from "react-router-dom";
import "../images/interior2D.jpg";
import { colors } from "../Color.ts";
import Icon from "@mdi/react";
import { mdiArrowLeftDropCircleOutline } from "@mdi/js";
import ImageURL from "../images/interior2D.jpg";

const MapPage = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <div>Map Page</div>
      <p>應該要有2D地圖，並連結3D地圖</p> */}
      <div
        style={{ display: "flex", alignItems: "center", paddingTop: "15px" }}
      >
        <button
          onClick={() => navigate(-1)}
          style={{
            backgroundColor: "transparent",
            border: "none",
            marginLeft: "10px",
            cursor: "pointer",
          }}
        >
          {/* <Icon
            path={mdiArrowLeftDropCircleOutline}
            size={3}
            color={colors.DarkSlateGray}
          /> */}
        </button>
        <h1 style={{ margin: "0 auto", color: "white"  }}>| 地圖導覽 |</h1>
      </div>
      <div
        style={{
          border: "#7C7C7C solid 2px",
          borderRadius: "20px",
          padding: "20px",
          margin: "20px",
          width: "95%",
          height: "max-content",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={ImageURL}
          alt="Interior2D"
          useMap="#interior2d"
          style={{ maxWidth: "100%" }}
        ></img>
        <map name="interior2d">
          <area
            shape="rect"
            coords="1288,0,1465,102"
            alt="Laser1"
            href="/button"
          ></area>
          <area
            shape="rect"
            coords="1465,0,1643,102"
            alt="Laser2"
            href="/button"
          ></area>
          <area
            shape="rect"
            coords="616,0,803,102"
            alt="3DP"
            href="/button"
          ></area>
          <area
            shape="rect"
            coords="878,0,957,254"
            alt="ChipsAndComponents"
            href="/button"
          ></area>
          <area
            shape="rect"
            coords="616,185,825,447"
            alt="Solder"
            href="/button"
          ></area>
          <area
            shape="rect"
            coords="1131,196,1581,377"
            alt="DrillsAndSaws"
            href="/button"
          ></area>
          <area
            shape="rect"
            coords="1064,491,1467,593"
            alt="tools1"
            href="/button"
          ></area>
          <area
            shape="rect"
            coords="1482,474,1682,590"
            alt="tools2"
            href="/button"
          ></area>
        </map>
      </div>
      {/* <button onClick={() => navigate(-1)}>go back</button> */}
    </>
  );
};

export default MapPage;
