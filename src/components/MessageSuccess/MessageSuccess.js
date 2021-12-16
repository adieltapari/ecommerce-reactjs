import React from 'react';
import { Message } from 'semantic-ui-react';

const MessageSuccess = ({ msg }) => (
    <Message
        success
        header='Your transaction ID number is:'
        content={msg.id}
        style={{ textAlign: 'center' }}
    />
);

export default MessageSuccess;