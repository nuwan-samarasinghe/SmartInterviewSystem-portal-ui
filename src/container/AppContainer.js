import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import AppHeaderBar from "../components/common/AppHeaderBar";
import AppDrawer from "../components/common/AppDrawer";
import {Route, Switch} from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Vacancies from "../components/Vacancies";
import Interviewers from "../components/Interviewers";
import Candidates from "../components/Candidates";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    }
}));

export default function AppContainer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppHeaderBar/>
            <AppDrawer/>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Switch>
                    <Route exact path='/' component={Dashboard}/>
                    <Route exact path='/vacancies' component={Vacancies}/>
                    <Route exact path='/interviewers' component={Interviewers}/>
                    <Route exact path='/candidates' component={Candidates}/>
                </Switch>
            </main>
        </div>
    );
}
