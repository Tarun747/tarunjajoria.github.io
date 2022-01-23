import React from 'react';
import classes from './Details.module.scss'
import Grid from '@mui/material/Grid';
import borApePanda from '../../../assets/borded_ape_panda.jpeg'

export default function Details() {
  return (<>
  <div className={classes.bg}>
    <Grid container
    spacing={2}
    alignItems="center"
    justify="center"
    >
      <Grid item md={3}>
        <img src={borApePanda} />
      </Grid>
      <Grid item md={9} >
     <div className={classes.mainContent}>
     <h2>Tarun Jajoria</h2>
        <p>
          An Electronics hobbyist passionate for innovative and digital content.
        </p>
     </div>
      </Grid>
    </Grid>
  </div>
  </>);
}
