import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InterviewersHistory from "./interviewer/InterviewersHistory";
import AvailableInterviewers from "./interviewer/AvailableInterviewers";
import NewInterviewer from "./interviewer/NewInterviewer";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Interviewers = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item sm={6}>
                    <NewInterviewer/>
                </Grid>
                <Grid item sm={6}>
                    <AvailableInterviewers/>
                </Grid>
                <Grid item sm={12} xs={12}>
                    <InterviewersHistory/>
                </Grid>
            </Grid>
        </div>
    );
}



export default Interviewers;