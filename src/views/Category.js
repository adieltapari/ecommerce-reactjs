import React from 'react'
import ItemListContainer from '../components/Item/ItemListContainer/ItemListContainer'
import { useParams } from 'react-router'
import Footer from '../components/Footer/Footer';

const Category = () => {
    const params = useParams();
    return (
        <div>
            <ItemListContainer categoryId={params.categoryId} />
            <ItemListContainer categoryId="MLA1499" />
            <ItemListContainer categoryId="MLA1574" />
        </div>
    )
}

export default Category
