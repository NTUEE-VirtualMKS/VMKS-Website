import React from 'react'
import { useNavigate } from "react-router-dom"
import { ALL_MACHINE_QUERY } from '../graphql'
import { useQuery } from '@apollo/client'

const AllMachines = () => {
    const { loading, error, data } = useQuery(ALL_MACHINE_QUERY);
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return <div>{JSON.stringify(data?.AllMachines)}</div>
}

const Machine = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>
                {AllMachines()}
            </div>
            <button onClick={() => navigate(-1)}>go back</button>
        </>
    )
}

export default Machine