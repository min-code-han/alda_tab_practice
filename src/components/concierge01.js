import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: "10px",
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 8,
    marginTop: 10,
    fontSize: 12,
  },
});

const cards = [1, 2, 3, 4];

const Concierge01 = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <>
      {cards.map((cards) => (
        <Card className={classes.root} key={cards}>
          <CardContent>
            <Typography variant='h5' component='h2'>
              요금 납부내역
            </Typography>
            <Typography className={classes.pos} color='textSecondary'>
              1분만에 제출하기
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default Concierge01;
