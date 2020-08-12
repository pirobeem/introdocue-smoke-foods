import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  width: 100%;
  height: 60px;
  background-color: black;
  display: flex;
  align-items: center;
`;

const HeaderTitleDiv = styled.div`
   vertical- align: middle;
   padding: 5px;
   font-size: 35px;
   color: white;
   font-weight: bold;
`;

function Header(): JSX.Element {
  return (
    <HeaderDiv>
      <HeaderTitleDiv id="title">{"Introduce Smoked Foods"}</HeaderTitleDiv>
    </HeaderDiv>
  );
}
export default Header;
