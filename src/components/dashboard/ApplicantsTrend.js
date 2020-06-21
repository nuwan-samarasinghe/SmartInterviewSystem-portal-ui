import React from 'react';
import Typography from "@material-ui/core/Typography";
import {Bubble, HorizontalBar} from "react-chartjs-2";
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
    labels: ['Jun 01', 'Jun 02', 'Jun 03', 'Jun 04'],
    datasets: [
        {
            label: 'Received Applications',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(63,232,43,0.62)',
            borderColor: 'rgb(18,102,0)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [{x: 1, y: 5, r: 15}, {x: 2, y: 10, r: 5}, {x: 3, y: 7, r: 10}, {x: 4, y: 20, r: 5}]
        }
    ]
};


const ApplicantsTrend = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.title}>
                Applicants Trend
            </Typography>
            <Bubble data={data}  height={120}/>
        </Paper>
    )
}

export default ApplicantsTrend;