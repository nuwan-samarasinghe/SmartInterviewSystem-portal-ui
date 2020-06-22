import React from 'react';
import axios from 'axios';

const interviewerBaseUrl = 'http://ec2-3-235-104-89.compute-1.amazonaws.com:8182/interviewers'

export const getInterviewers = async () => {
    const interviewers = [];
    await axios.get(interviewerBaseUrl,
        {
            headers: {
                'Authorization': 'Bearer 1428d3bd-875f-4456-b436-a9aecd156377',
            }
        })
        .then(response => {
            interviewers.push(response.data)
        })
    return interviewers;
}

export const addNewInterviewer = async (firstName, lastName, designation) => {
    const interviewers = [];
    await axios({
        method: 'post',
        url: interviewerBaseUrl,
        headers: {
            'Authorization': 'Bearer 1428d3bd-875f-4456-b436-a9aecd156377',
        },
        data: {
            firstName: firstName,
            lastName: lastName,
            designation: designation,
            track: {id: 1}
        }
    })
        .then(response => {
            interviewers.push(response.data)
        })
    return interviewers;
}