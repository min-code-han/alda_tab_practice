import React from 'react';
import {Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const typosStyle = makeStyles((theme)=>({
    h1:{
        paddingTop:"40px",
        paddingBottom:"30px",
    }
}))

const Content = (props) => {
    const classes = typosStyle();
    const {title, sub1, sub2} = props
    return(
        <>
            <Typography variant="h5" className={classes.h1}>{title}</Typography>
            <Typography variant="h7">{sub1}</Typography><br />
            <Typography variant="h7">{sub2}</Typography>
        </>
    )
};

export default Content;