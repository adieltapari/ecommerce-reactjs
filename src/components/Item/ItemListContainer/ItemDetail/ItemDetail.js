import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './ItemDetail.css';

const ItemDetail = ({price, stock,img}) => (
	<div className='ItemDetailContainer'>
		<Card>
			<Card.Content>
				<Image src={img} wrapped ui={false} />	
				<Card.Header>$ {price}</Card.Header>
                <p>stock: {stock}</p>
				<button>ver detalle del producto</button>
			</Card.Content>
		</Card>
	</div>
);

export default ItemDetail;