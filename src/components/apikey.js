import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import {
  useParams
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:'20px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const ApiKey = () => {
  const classes = useStyles();

  let { id } = useParams();

  return (
      <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs>
          <Paper className={classes.paper}>Your API key is <strong>{id}</strong></Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ApiKey;
