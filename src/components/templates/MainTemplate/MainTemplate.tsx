import { Topbar } from "components/organisms/Topbar/Topbar";
import React from "react";
import { Wrapper } from "./MainTemplate.styles";

const MainTemplate: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Topbar />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
