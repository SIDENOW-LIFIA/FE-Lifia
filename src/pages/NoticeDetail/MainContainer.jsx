import React from "react";
import styled from "styled-components";
import MainContent from "./MainContent";

const MainContainer = ({ coments, setComents }) => {
  return (
    <Wrapper>
      <Container>
        <MainContent coments={coments} setComents={setComents} />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 994px;
  height: 100%;
  margin-top: 20px;
`;

const Container = styled.div`
  padding: 10px;
`;

export default MainContainer;
