import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import {DropzoneDialogBase} from "material-ui-dropzone";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
import Grid from "@material-ui/core/Grid";
import {connect} from "react-redux";
import {addInterviewer} from "../../actions/RootActions";
import {addNewInterviewer, getInterviewers} from "../../services/InterviewerService";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        paddingTop: theme.spacing(2)
    },
    formControl: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(2),
        minWidth: 250,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    inline: {
        display: 'inline',
    },
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        margin: theme.spacing(5)
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    dropZone: {
        fontSize: "small"
    }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const NewInterviewer = (props) => {

    const classes = useStyles();
    const theme = useTheme();

    const [state, setState] = React.useState({
        firstName: '',
        lastName: '',
        position: ''
    });

    const technologyStacks = [
        'Java',
        'MySQL',
        'AWS',
        'ReactJS'
    ];
    const [technologyStack, setTechnologyStack] = React.useState([]);

    const handleStackChange = (event) => {
        setTechnologyStack(event.target.value);
    };

    const handleAddInterviewer = (event) => {
        // event.preventDefault();
        addNewInterviewer(state.firstName, state.lastName, state.position).then(interviewer => {
                props.addInterviewer(interviewer.id, interviewer.firstName, interviewer.lastName, interviewer.position)
            }
        );
    }

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.value});
    };

    const [open, setOpen] = React.useState(false);
    const [avatarPath, setAvatarPath] = React.useState("");
    const [fileObjects, setFileObjects] = React.useState([]);

    return (
        <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.title}>
                Add new Interviewer
            </Typography>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleAddInterviewer}>
                <Grid container spacing={3}>
                    <Grid item sm={6} xs={12}>
                        <FormControl className={classes.formControl}>
                            <Avatar alt="Remy Sharp"
                                    src={avatarPath}
                                    className={classes.avatar}
                                    onClick={() => setOpen(true)}
                            />
                            <DropzoneDialogBase
                                acceptedFiles={['image/*']}
                                fileObjects={fileObjects}
                                cancelButtonText={"cancel"}
                                submitButtonText={"submit"}
                                maxFileSize={5000000}
                                open={open}
                                onAdd={newFileObjs => {
                                    console.log('onAdd', newFileObjs);
                                    setFileObjects([].concat(fileObjects, newFileObjs));
                                }}
                                onDelete={deleteFileObj => {
                                    console.log('onDelete', deleteFileObj);
                                }}
                                onClose={() => setOpen(false)}
                                onSave={() => {
                                    console.log('onSave', fileObjects);
                                    setOpen(false);
                                    setAvatarPath(fileObjects[0].file.path)
                                }}
                                showPreviews={true}
                                showFileNamesInPreview={true}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <FormControl className={classes.formControl}>
                            <TextField id="first-name" name={"firstName"} fullWidth label="First Name"
                                       onChange={handleChange}/>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <TextField id="last-name" name={"lastName"} fullWidth label="Last Name"
                                       onChange={handleChange}/>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <TextField id="designation" fullWidth name={"position"} label="Designation"
                                       onChange={handleChange}/>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="technologies">Technologies special in</InputLabel>
                            <Select
                                labelId="technologies"
                                id="technologies-special-in"
                                multiple
                                fullWidth
                                value={technologyStack}
                                onChange={handleStackChange}
                                input={<Input id="select-technologies"/>}
                                renderValue={(selected) => (
                                    <div className={classes.chips}>
                                        {selected.map((value) => (
                                            <Chip key={value} label={value} className={classes.chip}/>
                                        ))}
                                    </div>
                                )}
                                MenuProps={MenuProps}
                            >
                                {technologyStacks.map((name) => (
                                    <MenuItem key={name} value={name} style={getStyles(name, technologyStack, theme)}>
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <Button
                                type={"submit"}
                                variant="contained"
                                color="primary"
                                size="large"
                                className={classes.button}
                                startIcon={<SaveIcon/>}
                            >
                                Save
                            </Button>
                        </FormControl>
                    </Grid>
                </Grid>
            </form>
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
        addInterviewer: (id, firstName, lastName, designation) => {
            dispatch(addInterviewer(id, firstName, lastName, designation))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewInterviewer);