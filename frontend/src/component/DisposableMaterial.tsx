import React from 'react'
import { useNavigate } from "react-router-dom"
import { ALL_DISPOSABLE_MATERIALS_QUERY } from '../graphql'
import { useQuery } from '@apollo/client'

const AllDisposableMaterials = () => {
    const { loading, error, data } = useQuery(ALL_DISPOSABLE_MATERIALS_QUERY);
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return <div>{JSON.stringify(data?.AllDisposableMaterials)}</div>
}

const DisposableMaterial = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>
                {AllDisposableMaterials()}
            </div>
            <button onClick={() => navigate(-1)}>go back</button>
        </>
    )
}

export default DisposableMaterial