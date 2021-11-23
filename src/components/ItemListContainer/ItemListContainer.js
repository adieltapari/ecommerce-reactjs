import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import ItemCount from '../ItemCount/ItemCount';

import './ItemListContainer.css';

const ItemListContainer = ({ img, name, description }) => (
	<div className='ItemListContainer'>
		<Card>
			<Image src={img} wrapped ui={false} />
			<Card.Content>
				<Card.Header>{name}</Card.Header>
			</Card.Content>
			<Card.Description>{description}</Card.Description>
			<ItemCount />
		</Card>
	</div>
);

export default ItemListContainer;
