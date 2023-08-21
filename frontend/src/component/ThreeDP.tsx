import React from 'react'
import { useNavigate } from "react-router-dom"
import { ALL_THREEDP_QUERY } from '../graphql'
import { useQuery } from '@apollo/client'

const AllThreeDP = () => {
    const { loading, error, data } = useQuery(ALL_THREEDP_QUERY);
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return <div>{JSON.stringify(data?.AllThreeDP)}</div>
}

const ThreeDP = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>
                {AllThreeDP()}
            </div>
            <button onClick={() => navigate(-1)}>go back</button>
        </>
    )
}

export default ThreeDP