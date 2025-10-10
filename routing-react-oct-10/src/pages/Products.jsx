import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom';

function Products() {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name');
    return (
        <div>Products {id} {name}</div>
    )
}

export default Products