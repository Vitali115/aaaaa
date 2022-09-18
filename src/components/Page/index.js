import React from "react";
import styled from "styled-components";

import Title from "./Title";

const Container = styled.div`
  padding: 0 40px;
`;

const Page = ({ children }) => {
  return (
    <Container>
      <br />
      {children}
    </Container>
  );
};

Page.Title = Title;

export default Page;
