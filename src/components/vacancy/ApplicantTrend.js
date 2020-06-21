import React from 'react';
import Typography from "@material-ui/core/Typography";
import {HorizontalBar} from "react-chartjs-2";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";

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

const data = {
    labels: ['Java SE', 'Java SSE', 'React Developer', 'Project Manager'],
    datasets: [
        {
            label: 'Applied candidates',
            backgroundColor: 'rgba(113,255,19,0.2)',
            borderColor: 'rgb(60,186,51)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 8]
        }
    ]

};


const ApplicantTrend = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.title}>
                Applicants Trend
            </Typography>
            <HorizontalBar
                data={data}
                height={250}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </Paper>
    )
}

export default ApplicantTrend;