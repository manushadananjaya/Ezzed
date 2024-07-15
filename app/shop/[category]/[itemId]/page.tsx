import React from 'react'

interface PageProps {
    params: {
        itemId: string;
    };
}

function page({params}: PageProps) {
    return (
        <div>
            <h1>Details {params.itemId}</h1>
        </div>
    )
}

export default page
