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
});

const cards = [1, 2, 3, 4];

const Concierge01 = () => {
  const classes = useStyles();

  return (
    <>
      {cards.map((cards) => (
        <Card className={classes.root} key={cards}>
          <CardContent>
            <Typography className={classes.title}>요금 납부내역</Typography>
            <Typography className={classes.pos} color='textSecondary'>
              1분만에 제출하기
            </Typography>
          </CardContent>
          <i className='fas fa-arrow-right' />
        </Card>
      ))}
      <Notice>❗️ 참고해주세요</Notice>
      <Content>
        <li>기타 부정적 요인으로 점수가 오르지 않을 수 있습니다.</li>
        <li>기타 부정적 요인으로 점수가 오르지 않을 수 있습니다.</li>
        <li>기타 부정적 요인으로 점수가 오르지 않을 수 있습니다.</li>
        <li>기타 부정적 요인으로 점수가 오르지 않을 수 있습니다.</li>
        <li>기타 부정적 요인으로 점수가 오르지 않을 수 있습니다.</li>
        <li>기타 부정적 요인으로 점수가 오르지 않을 수 있습니다.</li>
      </Content>
    </>
  );
};

export default Concierge01;

const Notice = styled.p`
  font-size: 14px;
`;

const Content = styled.ul`
  font-size: 12px;
  color: #bdbdbd;
`;
