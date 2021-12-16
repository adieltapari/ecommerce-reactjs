import React from 'react';
import { Message } from 'semantic-ui-react';

const Error = () => (
    <Message negative style={{ padding: 40, margin: 40, textAlign: 'center' }}>
        <Message.Header>We're sorry we can't show the page</Message.Header>
        <p>Error 404</p>
    </Message>
);

export default Error;