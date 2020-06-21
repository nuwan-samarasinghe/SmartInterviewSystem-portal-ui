import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ApplicantTrend from "./vacancy/ApplicantTrend";
import PublishedVacancies from "./vacancy/PublishedVacancies";
import NewVacancy from "./vacancy/NewVacancy";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));


const Vacancies = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item sm={12} xs={12}>
                    <NewVacancy/>
                </Grid>
                <Grid item sm={7} xs={12}>
                    <ApplicantTrend/>
                </Grid>
                <Grid item sm={5} xs={12}>
                    <PublishedVacancies/>
                </Grid>
            </Grid>
        </div>
    );
}

export default Vacancies;