import React from "react";
import { useState, useEffect } from "react";
import {
  // BrowserRouter as Router,
  Route,
  Routes,
  useMatch,
} from "react-router-dom";
import {
  // Panel,
  PanelGroup,
  // PanelResizeHandle
} from "react-resizable-panels";
import ImageURL from "../../assets/vmks_dusk_ui_bg_v2.png";
import {
  GlobalStyles,
  StyledPanel,
  StyledPanelResizeHandleHorizontal,
  StyledPanelResizeHandleVertical,
  StyledPanelContainer,
  StyledImg,
} from "./styles";
import "../../assets/vmks_logo-removebg.png";
import "../../assets/vmks_dusk_ui_bg_v2.png";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Forum from "../Forum";

import PathPanel from "../../components/panels/PathPanel";
import MKSIntroPanel from "../../components/panels/MKSIntroPanel";
import MaterialViewPanel from "../../components/panels/MaterialViewPanel";
import AnnouncementPanel from "../../components/panels/AnnouncementPanel";
import FavoriteLinksPanel from "../../components/panels/FavoriteLinksPanel";
import OpeningHoursPanel from "../../components/panels/OpeningHoursPanel";

const Home: React.FC = () => {
  const match = useMatch("/advanced/");
  const [isHome, setHome] = useState(true);

  useEffect(() => {
    setHome(!match); // match will be non-null if the route matches
  }, [match]);

  if (!isHome) {
    //panel view for renting page
    return (
      <>
        {/* global styles */}
        <GlobalStyles />

        {/* <div className="logo">
        <img src={require("./assets/vmks_logo.png")} alt="Website Logo" />
      </div> */}

        {/* background image */}
        <StyledImg src={ImageURL} alt="Background" />

        {/* navbar */}
        <NavBar />

        {/* navbar routes with 6 resizable panels */}
        <PanelGroup direction="horizontal">
          {/* 3 left panels */}
          <StyledPanelContainer>
            <PanelGroup direction="vertical">
              {/* path panel */}
              <StyledPanel defaultSize={20}>
                <PathPanel />
              </StyledPanel>
              <StyledPanelResizeHandleVertical />
              {/* mks intro panel */}
              <StyledPanel>
                <MKSIntroPanel />
              </StyledPanel>
              <StyledPanelResizeHandleVertical />
              {/* material view panel */}
              <StyledPanel>
                <MaterialViewPanel />
              </StyledPanel>
            </PanelGroup>
          </StyledPanelContainer>
          <StyledPanelResizeHandleHorizontal />
          {/* middle panels */}
          <StyledPanelContainer minSize={30}>
            <div className="middle-panel">
              <Routes>
                <Route path="/" element={<Renting />} />
                <Route path="/map-guide" element={<MapGuide />} />
                <Route path="/forum" element={<Forum />} />
                <Route path="/about" element={<About />} />
                <Route path="/users-guide" element={<UsersGuide />} />
              </Routes>
            </div>
          </StyledPanelContainer>
          <StyledPanelResizeHandleHorizontal />
          {/* 3 right panels */}
          <StyledPanelContainer>
            <PanelGroup direction="vertical">
              {/* announcement panel */}
              <StyledPanel>
                <AnnouncementPanel />
              </StyledPanel>
              <StyledPanelResizeHandleVertical />
              {/* favorite links panel */}
              <StyledPanel>
                <FavoriteLinksPanel />
              </StyledPanel>
              <StyledPanelResizeHandleVertical />
              {/* opening hours panel */}
              <StyledPanel /*defaultSize={20} minSize={20}*/>
                <OpeningHoursPanel />
              </StyledPanel>
            </PanelGroup>
          </StyledPanelContainer>
        </PanelGroup>
      </>
    );
  } else {
    // normal view for advanced features
    return (
      <>
        {/* global styles */}
        <GlobalStyles />

        {/* background image */}
        <StyledImg src={ImageURL} alt="Background" />

        {/* navbar */}
        <NavBar />

        {/* <SideBar /> */}

        <Routes>
          <Route path="/" element={<Renting />} />
          <Route path="/map-guide" element={<MapGuide />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/about" element={<About />} />
          <Route path="/users-guide" element={<UsersGuide />} />
        </Routes>

        {/* footer */}
        {/* <Footer /> */}
      </>
    );
  }
};

const Renting: React.FC = () => <div>Renting Page</div>;
const MapGuide: React.FC = () => (
  <a href="https://360degree.pcwu2022.repl.co/">3D_panorama</a>
);
const About: React.FC = () => <div>About Page</div>;
const UsersGuide: React.FC = () => <div>Users Guide Page</div>;

export default Home;
