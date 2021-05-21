import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Concierge01 from "./components/concierge01";
import Concierge02 from "./components/concierge02";
import Concierge03 from "./components/concierge03";

const typosStyle = makeStyles((theme) => ({
  title: {
    display: "flex",
    alignItems: "center",
    paddingTop: "40px",
    paddingBottom: "30px",
  },
}));

const Content = (props) => {
  const [popUp, setPopUp] = useState(false);
  const classes = typosStyle();
  const { title, sub1, sub2, noticeIco, tab, setData } = props;
  const hadlePopUp = () => {
    setPopUp(!popUp);
  };

  function handleBg() {
    if (tab === "one") {
      setData("#97e2ff");
      return;
    }
    if (tab === "two") {
      setData("#ffe4e4");
      return;
    }

    if (tab === "three") {
      setData("#87f2f7");
      return;
    }
  }
  handleBg();

  return (
    <>
      <TxtWrap>
        <Typography variant='h5' className={classes.title}>
          {title}
          {noticeIco === "true" && (
            <i
              className='fas fa-info-circle tab-information'
              onClick={hadlePopUp}
            />
          )}
          {popUp && (
            <PopUp>
              React는
              <br /> 상호작용이 많은 UI를 만들 때 생기는 어려움을 줄여줍니다.
              애플리케이션의 각 상태에 대한 간단한 뷰만 설계하세요.
              <br /> 그럼 React는 데이터가 변경됨에 따라 적절한 컴포넌트만
              효율적으로 갱신하고 렌더링합니다. <br /> 선언형 뷰는 코드를 예측
              가능하고 디버그하기 쉽게 만들어 줍니다.
            </PopUp>
          )}
        </Typography>
        <Typography variant='h7'>{sub1}</Typography>
        <br />
        <Typography variant='h7'>{sub2}</Typography>
        {tab === "three" && (
          <Notice>
            <span>&#42;</span>
            <span>&#42;</span>
            알다 대출 찾기는 신용등급에 영향을 주지 않습니다.
          </Notice>
        )}
      </TxtWrap>
      {tab === "one" && <Concierge01 />}
      {tab === "two" && <Concierge02 />}
      {tab === "three" && <Concierge03 />}
    </>
  );
};

export default Content;

const TxtWrap = styled.div`
  position: relative;
  height: 200px;
`;

const Notice = styled.p`
  display: flex;
  align-items: flex-end;
  margin: 5px 0;
  font-size: 13px;
  color: gray;
  span {
    margin-right: 3px;
    line-height: 1;
  }
`;

const PopUp = styled.div`
  z-index: 10;
  position: absolute;
  top: 80px;
  left: 0;
  padding: 20px 40px;
  width: 100%;
  background-color: #ff5c20;
  text-align: center;
  font-size: 15px;
  color: #fff;
  box-sizing: border-box;
`;
