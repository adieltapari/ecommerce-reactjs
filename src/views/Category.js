import React from 'react'
import ItemListContainer from '../components/Item/ItemListContainer/ItemListContainer'
import { useParams } from 'react-router'
import NavBarCategory from '../components/NavBarCategory/NavBarCategory';

const Category = () => {
    const params = useParams();
    return (
        <div>
            <NavBarCategory />
            <ItemListContainer categoryId={params.categoryId} />
        </div>
    )
}

export default Category
