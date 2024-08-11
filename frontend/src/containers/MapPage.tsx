// TODO: make this alive
import { useNavigate } from "react-router-dom";
import "/interior2D.jpg";
import { colors } from "../Color.ts";
import Icon from "@mdi/react";
import { mdiArrowLeftDropCircleOutline } from "@mdi/js";
import ImageURL from "/interior2D.jpg";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const MapPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
      <div className="w-10/12 flex flex-col mx-auto mt-20 mb-8">
        <h1 className="text-white p-1 flex flex-row items-center gap-2">
          <Globe className="text-white" size={35} />
          {t("map")}
        </h1>
      </div>
      <div className="border-2 border-gray-600 rounded-2xl p-5 m-5 w-11/12  mx-auto h-max flex justify-center">
        <img
          src="/interior2D.jpg"
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
    </>
  );
};

export default MapPage;
