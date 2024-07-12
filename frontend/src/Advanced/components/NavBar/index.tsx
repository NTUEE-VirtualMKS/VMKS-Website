import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImgURL from "../../assets/vmks_logo-removebg.png";

import {
  NavContainer,
  RightContainer,
  LeftContainer,
  NavBarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  NavbarLinkExtended,
  Logo,
  OpenLinksButton,
  ClosedLinkButton,
} from "./styles";
import "../../assets/vmks_logo-removebg.png";

const NavBar: React.FC = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  let tmp = extendNavbar;

  return (
    <NavContainer tmp={tmp}>
      <NavBarInnerContainer>
        {/* left container with logo */}
        <LeftContainer>
          <Link to="/advanced">
            <Logo src={ImgURL} alt="Website Logo" />
          </Link>
        </LeftContainer>

        {/* right container with navbar */}
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/advanced/map-guide">Map-Guide</NavbarLink>
            <NavbarLink to="/advanced/forum"> Forum</NavbarLink>
            <NavbarLink to="/advanced/users-guide"> Users-Guide</NavbarLink>
            <NavbarLink to="/advanced/about">About</NavbarLink>
          </NavbarLinkContainer>
          <OpenLinksButton
            onClick={() => {
              setExtendNavbar((curr) => !curr);
            }}
          >
            {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
          </OpenLinksButton>
        </RightContainer>
      </NavBarInnerContainer>
      {/* navbar link in phone version */}
      {extendNavbar && (
        <NavbarExtendedContainer>
          <ClosedLinkButton
            onClick={() => {
              setExtendNavbar((curr) => !curr);
            }}
          >
            <NavbarLinkExtended to="/advanced/map-guide">
              Map-Guide
            </NavbarLinkExtended>
          </ClosedLinkButton>

          <ClosedLinkButton
            onClick={() => {
              setExtendNavbar((curr) => !curr);
            }}
          >
            <NavbarLinkExtended to="/advanced/forum"> Forum</NavbarLinkExtended>
          </ClosedLinkButton>

          <ClosedLinkButton
            onClick={() => {
              setExtendNavbar((curr) => !curr);
            }}
          >
            <NavbarLinkExtended to="/advanced/users-guide">
              Users-Guide
            </NavbarLinkExtended>
          </ClosedLinkButton>

          <ClosedLinkButton
            onClick={() => {
              setExtendNavbar((curr) => !curr);
            }}
          >
            <NavbarLinkExtended to="/advanced/about">About</NavbarLinkExtended>
          </ClosedLinkButton>
        </NavbarExtendedContainer>
      )}
    </NavContainer>
  );
};

export default NavBar;
