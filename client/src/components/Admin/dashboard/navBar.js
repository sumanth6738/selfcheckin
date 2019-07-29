import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import logo from '../../../Assets/logo3.png'
import SettingsPower from '@material-ui/icons/SettingsPower';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';



const styles = theme => ({
    root: {
        flexGrow: 1,

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        marginLeft: '2em',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },

    inputRoot: {
        color: 'inherit',
    },
    orangeAvatar: {
        margin: 0,
        color: '#fff',
        backgroundColor: '#4b3d78',
    },

    button: {
        margin: theme.spacing(1),
        color: '#4b3d78',
        fontWeight: 'bold',

    },
    input: {
        display: 'none',
    },
});


class NavBar extends Component {
    constructor() {
        super()
        this.state = {
            show: false,

        }
    }
    handleShow = () => {
        this.setState(() => ({ show: true }))
    }

    handleClose = () => {
        this.setState(() => ({ show: false }))

    }

    handleOpen = (e) => {
        console.log('clicked')
    }
    render() {
        const { classes } = this.props;


        return (
            <div className={classes.root}>
                <AppBar position="static" style={{ color: '#4b3d78', backgroundColor: 'white' }}>
                    <Toolbar>
                        <img src={logo} alt='mverve' style={{ width: '150px', height: '40px' }}></img>
                        <Typography className={classes.title} variant="h6" noWrap style={{ fontFamily: 'Sans Serif' }}>
                            Visitor's Self Check-In App
                        </Typography>

                        <Button className={classes.button} component={Link} to="/admin/employee_list" >
                            Employee
                        </Button>
                        <Button className={classes.button} component={Link} to="/admin/dashboard" >
                            Visitors
                        </Button>
                        <div className="dropdown" style={{}} >
                            <button className="dropbtn" style={{ border: 'none', outline: 'none', marginRight: '40px' }}  >
                                <center>
                                    <Grid container  >
                                        <Avatar className={classes.orangeAvatar}>A</Avatar>
                                    </Grid>
                                </center></button>
                            <div className="dropdown-content"  >
                                {/* <Link to="/profile"> */}
                                <AccountCircle> </AccountCircle> &nbsp; My Profile
                                    {/* </Link> */}
                                <Link to="/admin/logout"><SettingsPower> </SettingsPower> &nbsp; Log Out</Link>
                            </div>
                        </div>

                    </Toolbar>
                </AppBar>


            </div >
        );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar)



