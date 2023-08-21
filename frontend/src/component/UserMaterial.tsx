import React from 'react'
import { useNavigate } from "react-router-dom"
import { ALL_USER_MATERIAL_QUERY } from '../graphql'
import { useQuery } from '@apollo/client'

const AllUserMaterials = () => {
    const { loading, error, data } = useQuery(ALL_USER_MATERIAL_QUERY);
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return <div>{JSON.stringify(data?.AllUserMaterials)}</div>
}

const UserMaterial = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>
                {AllUserMaterials()}
            </div>
            <button onClick={() => navigate(-1)}>go back</button>
        </>
    )
}

export default UserMaterial