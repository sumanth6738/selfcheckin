import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import logo from '../Assets/logo3.png'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    width: '200px'
  },
  input: {
    display: 'none',
  },

}));

const Page = () => {
  const classes = useStyles();
  return (
    <div className="body-img" >
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <div className="container">
          <span>
            <h5 style={{ paddingTop: '35px', float: 'right', fontFamily: 'Georgia', color: '#4b3d78', fontSize: '25px' }}> Visitor's Self Check-In App</h5>
            <img src={logo} alt='mverve' id="logo" style={{ paddingTop: '20px' }} />
          </span>
        </div>
        <span >
          <h3 id="wel">Welcome to Mverve</h3>
        </span>

        <center>
          <Button id='sig' variant="contained" color="secondary" className={classes.button}  >
            <Link to='/register' style={{ color: '#4b3d78' }}  > Tap To Sign In ></Link>
          </Button>
        </center>
      </Grid>
    </div>
  )
}
export default Page;
