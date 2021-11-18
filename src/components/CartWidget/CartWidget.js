import React from 'react';
import { Card, Image } from 'semantic-ui-react';

import './CartWidget.css';

const CartWidget = ({ img, name, description }) => (
	<div className='CartWidget'>
		<Card>
			<Image src={img} wrapped ui={false} />
			<Card.Content>
				<Card.Header>{name}</Card.Header>
			</Card.Content>
			<Card.Description>{description}</Card.Description>
		</Card>
	</div>
);

export default CartWidget;
