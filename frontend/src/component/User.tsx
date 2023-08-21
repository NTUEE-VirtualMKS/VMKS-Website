import React from 'react'
import { useNavigate } from "react-router-dom"
import { ALL_USER_QUERY } from '../graphql'
import { useQuery } from '@apollo/client'

const AllUser = () => {
    const { loading, error, data } = useQuery(ALL_USER_QUERY);
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return <div>{JSON.stringify(data?.AllUser)}</div>
}

const User = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>
                {AllUser()}
            </div>
            <button onClick={() => navigate(-1)}>go back</button>
        </>
    )
}

export default User