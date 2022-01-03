import React from 'react';
import { Loader, Segment } from 'semantic-ui-react';

const Spinner = () => {

    return (
        <Segment>
            <Loader size='medium' active inline='centered'  >Cargando</Loader>;
        </Segment>
    )
}

export default Spinner;