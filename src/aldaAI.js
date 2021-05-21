import React, { useState } from "react";
import styled from "styled-components";
import TabPanel from "./tab";
import "./style/style.scss";

const AldaAI = () => {
  const [bgData, setBgData] = useState("initial data");
  console.log(bgData);
  return (
    <Wrap style={{ backgroundColor: `${bgData}` }}>
      <H1>
        ALDA 🎉 <i className='far fa-bell' />
      </H1>
      <TabPanel setBgData={setBgData} />
    </Wrap>
  );
};

export default AldaAI;

const Wrap = styled.div`
  padding: 0 25px 46px;
  width: 400px;
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
