import React from "react";
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
  const classes = typosStyle();
  const { title, sub1, sub2, noticeIco, tab } = props;
  return (
    <>
      <TxtWrap>
        <Typography variant='h5' className={classes.title}>
          {title}
          {noticeIco === "true" && (
            <i className='fas fa-info-circle tab-information' />
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
