import React from 'react';
import Navigation from './Navigation/Navigation'
import Details from './Details/Details'
import Grid from '@mui/material/Grid';


export default function HomePage() {
  return( 
  	<div>	  
	 <Grid container spacing={2}>
        <Grid xs={12} md={3}>
          <Navigation />
        </Grid>  
	<Grid xs={12} md={9} >
          <Details/>
        </Grid>	       
      </Grid> 
	</div>
 ) 
}
 