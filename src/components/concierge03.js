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
});

const Concierge03 = () => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title}>
            내게 맞는 대출 찾기<Event>EVENT</Event>
          </Typography>
          <Typography className={classes.pos}>
            지금 신청하면 이자지원금 5만원 드려요!
          </Typography>
        </CardContent>
        <i className='fas fa-arrow-right' />
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography>간편하고 안전한 알다 '대출신청'</Typography>
          <Info>
            <li>🍎 1분 안에 확정 금리 및 한도 확인</li>
            <li>🍎 복잡한 서류 제출 없는 조건 확인</li>
            <li>🍎 신용등급 영향 없어요</li>
            <li>🍎 스팸 전화 없어요</li>
          </Info>
        </CardContent>
      </Card>
      <Notion>
        맟춤 대출 찾기 서비스는 금융혁신지원 특별법에 따라 <br />
        시범 운영 중인 금융위원회 혁신금융서비스 입니다.
      </Notion>
      <Ico>🌈 금융위원회</Ico>
    </>
  );
};

export default Concierge03;

const Event = styled.span`
  padding: 5px 10px;
  margin-left: 5px;
  background-color: #5959ad;
  border-radius: 3px;
  font-size: 14px;
  color: #fff;
`;

const Info = styled.ul`
  padding: 0;
  list-style: none;
  font-size: 15px;
  li {
    line-height: 50px;
  }
`;

const Notion = styled.p`
  font-size: 12px;
  color: gray;
`;

const Ico = styled.p`
  margin-top: 5px;
  font-size: 13px;
`;
