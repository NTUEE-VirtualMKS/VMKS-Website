import React from 'react'
import { useNavigate } from "react-router-dom"
import { ALL_TOOL_QUERY } from '../graphql'
import { useQuery } from '@apollo/client'

const AllTools = () => {
    const { loading, error, data } = useQuery(ALL_TOOL_QUERY);
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return <div>{JSON.stringify(data?.AllTools)}</div>
}

const Tool = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>
                {AllTools()}
            </div>
            <button onClick={() => navigate(-1)}>go back</button>
        </>
    )
}

export default Tool