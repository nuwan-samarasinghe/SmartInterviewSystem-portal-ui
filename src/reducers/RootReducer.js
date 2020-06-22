import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import UpdateIcon from "@material-ui/icons/Update";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import React from "react";

const initState = {
    isMenuExpanded: false,
    interviewers: []
}

const RootReducer = (state = initState, action) => {

    if (action.type === 'TOGGLE_MENU') {
        return {
            ...state,
            isMenuExpanded: !state.isMenuExpanded
        }
    } else if (action.type === 'LOAD_INTERVIEWERS') {
        // state.interviewers.clear();
        const interviewers = action.interviewers.length ? (action.interviewers[0].map(interviewer => {
            return (
                {
                    id: interviewer.id,
                    firstName: interviewer.firstName,
                    lastName: interviewer.lastName,
                    position: interviewer.position
                }
            )
        })) : ([]);
        return {
            ...state,
            interviewers: interviewers
        }
    } else if (action.type === 'ADD_INTERVIEWER') {
        const interviewer = {
            id: action.id,
            firstName: action.firstName,
            lastName: action.lastName,
            designation: action.designation
        }
        const existInterviewers = state.interviewers;
        existInterviewers.push(interviewer);
        return {
            ...state,
            interviewers: existInterviewers
        }
    }
    return state;
}

export default RootReducer;