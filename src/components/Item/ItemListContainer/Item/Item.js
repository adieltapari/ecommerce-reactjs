import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './Item.css';

const Item = ({item}) => (
	<div className='ItemContainer'>
		<Card>
			<Card.Content>
				<Image src={item.img} wrapped ui={false} />	
				<Card.Header>$ {item.price}</Card.Header>
                <p>stock: {item.stock}</p>
				<button>ver detalle del producto</button>
			</Card.Content>
		</Card>
	</div>
);

export default Item;