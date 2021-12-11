import React from 'react'
import ItemListContainer from '../components/Item/ItemListContainer/ItemListContainer'
import { useParams } from 'react-router'

const Category = () => {
    const params = useParams();
    return (
        <div>
            <ItemListContainer categoryId={params.categoryId} />
            <ItemListContainer categoryId="MLA1499" />
            <ItemListContainer categoryId="MLA1000" />
        </div>
    )
}

export default Category
