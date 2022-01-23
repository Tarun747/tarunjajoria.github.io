import React from 'react';
import {Route, Switch} from 'react-router'
import Navigation from './Navigation/Navigation'
import Details from './Details/Details'
import About from './About/About'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Hire from './Hire/Hire'
import Grid from '@mui/material/Grid';


export default function HomePage() {
  return( 
  	<div>	  
	 <Grid container spacing={2}>
        <Grid xs={12} md={3}>
          <Navigation />
        </Grid>  
	<Grid xs={12} md={9} >
  <Switch>
    <Route exact={true} path="/" component={Details} />
    <Route exact={true} path="/about" component={About} />                  
    <Route exact={true} path="/projects" component={Projects} />              
    <Route exact={true} path="/contact" component={Contact} />              
    <Route exact={true} path="/hire" component={Hire} />              
  </Switch>
        </Grid>	       
      </Grid> 
	</div>
 ) 
}
 