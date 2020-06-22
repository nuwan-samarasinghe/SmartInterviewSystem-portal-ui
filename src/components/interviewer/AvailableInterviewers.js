import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import UpdateIcon from '@material-ui/icons/Update';
import AssignmentIcon from "@material-ui/icons/Assignment";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import {loadInterviewers} from "../../actions/RootActions";
import {connect} from "react-redux";
import lifecycle from 'react-pure-lifecycle';
import {getInterviewers} from "../../services/InterviewerService";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }, inline: {
        display: 'inline',
    },
}));

let loaded = false;

const AvailableInterviewers = (props) => {

    if (!loaded) {
        getInterviewers().then(res => {
            props.loadInterviewers(res);
        });
        loaded = true;
    }

    const classes = useStyles();
    const interviewers = props.interviewers;
    console.log(interviewers);
    const interviewerComList = interviewers.length ? (interviewers.map(interviewer => {
        console.log(interviewer);
        return (
            <ListItem key={interviewer.id}>
                <ListItemAvatar>
                    <Avatar>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={interviewer.firstName + " " + interviewer.lastName}
                              secondary={interviewer.designation}/>
                <ListItemSecondaryAction>
                    <Tooltip title="Update" arrow>
                        <IconButton edge="end" aria-label="update">
                            <UpdateIcon color="action"/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete" arrow>
                        <IconButton edge="end" aria-label="delete">
                            <DeleteIcon color="secondary"/>
                        </IconButton>
                    </Tooltip>
                </ListItemSecondaryAction>
            </ListItem>
        )
    })) : (
        <Typography className={classes.title}>
            No Available Interviewers
        </Typography>
    );

    return (
        <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.title}>
                Available Interviewers
            </Typography>
            {interviewerComList}
        </Paper>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        interviewers: state.interviewers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadInterviewers: (interviewers) => {
            dispatch(loadInterviewers(interviewers))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AvailableInterviewers);