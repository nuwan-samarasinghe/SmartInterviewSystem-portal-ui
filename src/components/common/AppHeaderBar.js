import React from 'react';
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";
import {connect} from 'react-redux';
import {toggleMenu} from "../../actions/RootActions";
import Avatar from "@material-ui/core/Avatar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: "#282c34",
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
}));

const AppHeaderBar = (props) => {
    const classes = useStyles();

    const handleDrawerOpen = () => {
        props.toggleMenu();
    };

    return (
        <AppBar position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: props.isMenuExpanded,
                })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: props.isMenuExpanded,
                    })}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Smart Interview Scheduler
                </Typography>
                <Avatar>SK</Avatar>
            </Toolbar>
        </AppBar>
    )
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    console.log(state);
    return {
        isMenuExpanded: state.isMenuExpanded
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleMenu: () => {
            dispatch(toggleMenu())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeaderBar);