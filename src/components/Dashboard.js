import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SummaryWidgets from "./dashboard/SummaryWidgets";
import ApplicantsTrend from "./dashboard/ApplicantsTrend";
import TopInterviewers from "./dashboard/TopInterviewers";
import LinkedInQuery from "./dashboard/LinkedInQuery";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    margin: {
        margin: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    button: {
        alignContent: "end"
    }
}));

const Dashboard = () => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <SummaryWidgets/>
                </Grid>
                <Grid item xs={6}>
                    <ApplicantsTrend/>
                </Grid>
                <Grid item xs={6}>
                    <TopInterviewers/>
                </Grid>
                <Grid item xs={6}>
                    <LinkedInQuery/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard;