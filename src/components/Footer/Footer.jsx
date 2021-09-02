import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Grid} from '@material-ui/core'
import './Footer.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (<div className="Footer_Background">
    <Grid container className={classes.root} spacing={1}>
      <Grid item xs={3}>
        <p>About us</p>
      </Grid>
      <Grid item xs={3}>
        <p>Connect</p>
      </Grid>
      <Grid item xs={3}>
        <p>Infomation</p>
      </Grid>
      </Grid>
  </div>
  );}