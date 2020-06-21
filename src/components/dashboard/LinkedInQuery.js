import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";

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


const LinkedInQuery = () => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Typography variant="h6" className={classes.title}>
                    Find Candidates
                </Typography>
                <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="standard-adornment-amount">LinkedIn Query</InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        startAdornment={<InputAdornment position="start">></InputAdornment>}
                    />
                </FormControl>
                <FormControl className={classes.margin}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.button}
                        startIcon={<LinkedInIcon/>}
                    >
                        Pull candidates from LinkedIn
                    </Button>
                </FormControl>
            </Paper>
        </div>
    )
}

export default LinkedInQuery;