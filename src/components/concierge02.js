import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";
import styled from "styled-components";

const useStyles = makeStyles({
  root: {
    position: "relative",
    minWidth: 275,
    marginBottom: "8px",
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 8,
    marginTop: 10,
    fontSize: 14,
    color: "#bdbdbd",
  },
  arrow: {
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "traslate(-50%,-50%)",
  },
  post: {
    color: "#5ec15e",
  },
  bold: {
    fontWeight: "bold",
    fontSize: 19,
  },
});

const cards = [1, 2];

const Concierge02 = () => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title}>
            대출 조회가 필요합니다.
          </Typography>
          <Typography className={classes.pos}>
            정확한 진단을 위해 대출 조회가 필요합니다.
          </Typography>
        </CardContent>
        <i className='fas fa-arrow-right' />
      </Card>
      <Wrap>
        {cards.map((cards) => (
          <Card className={classes.root} key={cards}>
            <CardContent>
              <Typography className={classes.post}>NAVER POST #1</Typography>
              <Typography className={classes.pos}>1분만에 제출하기</Typography>
              <Typography className={classes.bold}>
                금리인하요구권 신청방법
              </Typography>
            </CardContent>
            <i className='fas fa-arrow-right' />
          </Card>
        ))}
      </Wrap>
    </>
  );
};

export default Concierge02;

const Wrap = styled.div`
  margin-top: 35px;
`;
