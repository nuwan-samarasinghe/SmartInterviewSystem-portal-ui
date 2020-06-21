import React from 'react';
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Collapse from "@material-ui/core/Collapse";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import {ReactFormBuilder} from "react-form-builder2";
import 'react-form-builder2/dist/app.css';
import NewVacancyActionSummary from "./NewVacancyActionSummary";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    postVacancy: {
        padding: theme.spacing(2),
        textAlign: 'right',
        color: theme.palette.text.secondary,
        boxShadow: "none"
    },
    button: {
        margin: theme.spacing(1),
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

const NewVacancy = () => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <Paper className={classes.postVacancy}>
            <Button
                variant="outlined"
                color="secondary"
                className={classes.button}
                startIcon={<AddCircleOutlineIcon/>}
                onClick={handleChange}
            >
                Publish a new vacancy
            </Button>
            <Collapse in={checked}>
                <Paper elevation={4} className={classes.paper}>
                    <div className={classes.paper}>
                        <NewVacancyActionSummary/>
                        <ReactFormBuilder/>
                    </div>
                </Paper>
            </Collapse>
        </Paper>
    )
}

export default NewVacancy;