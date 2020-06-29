
import React from 'react';
import JobService from '../service/JobService';

let jobs = new JobService().getJobs();
export const JobContext = React.createContext(jobs);


const JobProvider = (props) => {
    return (
        <JobContext.Provider value={{
            jobs:jobs
        }}>
            {props.children}
        </JobContext.Provider >
    )
}

export default JobProvider;