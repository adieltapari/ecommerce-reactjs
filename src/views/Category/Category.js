import React from 'react'
import ItemListContainer from '../../components/Item/ItemListContainer/ItemListContainer'
import { useParams } from 'react-router'
import NavBarCategory from '../../components/NavBarCategory/NavBarCategory';
import './Category.css'
const Category = () => {
    const params = useParams();

    return (

        <div className='containerProductPage-category'>
            <div className='left-column-category'>
                <NavBarCategory />
            </div>
            <div className='right-column-category'>
                <ItemListContainer categoryId={params.categoryId} />
            </div>
        </div>


    )
}

export default Category
