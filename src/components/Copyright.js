// React
import React from 'react';
// Material-UI
import {
    Typography,
    Link
} from '@material-ui/core';

const CopyrightComponent = (props) => {
    return (
        <Typography variant="body2">
            {'Copyright © '}
            <Link color="inherit" href="http://telegram.pilprod.com">
                Popov Ilya
            </Link>{' Production '}
            {new Date().getFullYear()}
            {'  '}
        </Typography>
    )
}

export default CopyrightComponent;