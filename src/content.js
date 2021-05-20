import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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
  const { title, sub1, sub2, notice, tab } = props;
  return (
    <>
      <Typography variant='h5' className={classes.title}>
        {title}
        {notice === "true" && (
          <i className='fas fa-info-circle tab-information' />
        )}
      </Typography>
      <Typography variant='h7'>{sub1}</Typography>
      <br />
      <Typography variant='h7'>{sub2}</Typography>
      {tab === "one" && <Concierge01 />}
      {tab === "two" && <Concierge02 />}
      {tab === "three" && <Concierge03 />}
    </>
  );
};

export default Content;
