import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
  const { title, sub1, sub2, notice } = props;
  return (
    <>
      <Typography variant='h5' className={classes.title}>
        {title}
        {notice === "true" ? (
          <i className='fas fa-info-circle tab-information' />
        ) : (
          ""
        )}
      </Typography>
      <Typography variant='h7'>{sub1}</Typography>
      <br />
      <Typography variant='h7'>{sub2}</Typography>
    </>
  );
};

export default Content;
