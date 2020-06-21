import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    summaryWidget: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: theme.spacing(17),
    },
    summaryTitle: {
        color: "gray",
        marginBottom: theme.spacing(),
    }
}));


const SummaryWidgets = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper className={classes.summaryWidget}>
                        <Typography className={classes.summaryTitle}>
                            Published Vacancies
                        </Typography>
                        <Typography variant="h3" component="h2">
                            13
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.summaryWidget}>
                        <Typography className={classes.summaryTitle}>
                            Available Interviewers
                        </Typography>
                        <Typography variant="h3" component="h2">
                            21
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.summaryWidget}>
                        <Typography className={classes.summaryTitle}>
                            Total Applied Candidates
                        </Typography>
                        <Typography variant="h3" component="h2">
                            122
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.summaryWidget}>
                        <Typography className={classes.summaryTitle}>
                            Upcoming Interviews
                        </Typography>
                        <Typography variant="h3" component="h2">
                            5
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default SummaryWidgets;