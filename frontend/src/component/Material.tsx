import React from 'react'
import { useNavigate } from "react-router-dom"
import { ALL_MATERIAL_QUERY } from '../graphql'
import { useQuery } from '@apollo/client'

const AllMaterials = () => {
    const { loading, error, data } = useQuery(ALL_MATERIAL_QUERY);
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return <div>{JSON.stringify(data?.AllMaterials)}</div>
}

const Material = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>
                {AllMaterials()}
            </div>
            <button onClick={() => navigate(-1)}>go back</button>
        </>
    )
}

export default Material