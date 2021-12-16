import React from 'react'
import ItemListContainer from '../components/Item/ItemListContainer/ItemListContainer'
import { useParams } from 'react-router'

const Category = () => {
    const params = useParams();
    return (
        <div>
            <ItemListContainer categoryId={params.categoryId} />
        </div>
    )
}

export default Category
