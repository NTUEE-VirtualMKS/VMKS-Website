import React from 'react'
import { useNavigate } from "react-router-dom"
import { ALL_ARTICLE_QUERY } from '../graphql'
import { useQuery } from '@apollo/client'

const AllArticles = () => {
    const { loading, error, data } = useQuery(ALL_ARTICLE_QUERY);
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return <div>{JSON.stringify(data?.AllArticles)}</div>
}

const Article = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>
                {AllArticles()}
            </div>
            <button onClick={() => navigate(-1)}>go back</button>
        </>
    )
}

export default Article