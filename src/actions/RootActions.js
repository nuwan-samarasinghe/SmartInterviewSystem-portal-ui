export const toggleMenu = () => {
    return {
        type: 'TOGGLE_MENU'
    }
}

export const loadInterviewers = (interviewers) => {
    return {
        type: 'LOAD_INTERVIEWERS',
        interviewers
    }
}

export const addInterviewer = (id, firstName, lastName, designation) => {
    return {
        type: 'ADD_INTERVIEWER',
        id,
        firstName,
        lastName,
        designation
    }
}