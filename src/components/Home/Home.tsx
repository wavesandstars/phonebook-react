import React from 'react'

interface Props{
    title: string;
}

export const Home = ( props:Props) => {
    return (
        <div>
            Text Here
            <h3>{props.title}</h3>
        </div>
    )
}