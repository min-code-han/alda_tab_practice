import React from "react";
import styled from "styled-components";
import TabPanel from "./tab";
import "./style/style.scss";

const AldaAI = () => {
  return (
    <Wrap>
      <H1>
        ALDA 🎉 <i className='far fa-bell' />
      </H1>
      <TabPanel />
    </Wrap>
  );
};

export default AldaAI;

const Wrap = styled.div`
  padding: 0 25px 46px;
  width: 400px;
  background-color: beige;
`;

const H1 = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0 10px 0;
  font-size: 17px;
  i {
    font-size: 23px;
    cursor: pointer;
  }
`;
