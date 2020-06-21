import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Chip from "@material-ui/core/Chip";
import StarsIcon from '@material-ui/icons/Stars';
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    inline: {
        display: 'inline',
        color: "gray"
    },
}));

export default function TopInterviewers() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h6" className={classes.title}>
               Top Interviewers
            </Typography>
            <List className={classes.root}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                    </ListItemAvatar>

                    <ListItemText
                        primary="Some Interviewer Name"
                        secondary={
                            <React.Fragment>
                                <Typography variant="overline" display="block" gutterBottom>
                                    Associate Architect - Technology
                                </Typography>
                                <Chip
                                    icon={<StarsIcon/>}
                                    label="First place"
                                    variant="outlined"
                                />
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li"/>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                    </ListItemAvatar>

                    <ListItemText
                        primary="Some Interviewer Name"
                        secondary={
                            <React.Fragment>
                                <Typography variant="overline" display="block" gutterBottom>
                                    Associate Architect - Technology
                                </Typography>
                                <Chip
                                    icon={<StarsIcon/>}
                                    label="First place"
                                    variant="outlined"
                                />
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li"/>
            </List>
        </div>
    );
}