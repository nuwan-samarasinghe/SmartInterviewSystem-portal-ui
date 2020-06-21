import React from 'react';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
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

function generate(element) {
    return [0, 1, 2, 3, 4].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}


const PublishedVacancies = () => {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);

    return (
        <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.title}>
                Published Vacancies
            </Typography>
            <div className={classes.demo}>
                <List dense={dense}>
                    {generate(
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <AssignmentIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Senior Consultant - Java"/>
                            <ListItemSecondaryAction>
                                <Tooltip title="Delete" arrow>
                                    <IconButton edge="end" aria-label="delete">
                                        <DeleteIcon color="secondary"/>
                                    </IconButton>
                                </Tooltip>
                            </ListItemSecondaryAction>
                        </ListItem>
                    )}
                </List>
            </div>
        </Paper>
    )
}

export default PublishedVacancies;