import React from 'react';
import classes from './Navigation.module.scss'
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom'

export default function Navigation() {
  return <div className={classes.bg} >
	  <Stack spacing={2}
	  alignItems="center">
		<Grid>
			<Grid item md={12} center>
				<div className={classes.navigationBtn}>
					<Link  to="/" className="btn btn-primary">
        					<h3>
							# Home
						</h3>
					</Link>
				</div>
			</Grid>
			<Grid item md={12} center>
				<div className={classes.navigationBtn}>
					<Link  to="/" className="btn btn-primary">
        					<h3>
							# About
						</h3>
					</Link>
				</div>
			</Grid>
			<Grid item md={12} center>
				<div className={classes.navigationBtn}>
					<Link  to="/" className="btn btn-primary">
        					<h3>
							# Project
						</h3>
					</Link>
				</div>
			</Grid>
			<Grid item md={12} center>
				<div className={classes.navigationBtn}>
					<Link  to="/" className="btn btn-primary">
        					<h3>
							# Contact
						</h3>
					</Link>
				</div>
			</Grid>
			<Grid item md={12} center>
				<div className={classes.navigationBtn}>
					<Link  to="/" className="btn btn-primary">
        					<h3>
							# Hire Me!
						</h3>
					</Link>
				</div>
			</Grid>
		</Grid>
	  </Stack>
	  </div>
  ;
}
