// React
import React from 'react';
// Material-UI
import {
    makeStyles,
    Box
} from '@material-ui/core';
import CopyrightComponent from './Copyright';

const FooterComponent = (props) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            height: '100px',
            // borderTop: '1px solid #eaeaea',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    }));

    const classes = useStyles();

    return (
        <React.Fragment>
            <footer>
                <Box component="div" className={classes.root}>
                    <CopyrightComponent />
                </Box>
            </footer>
        </React.Fragment>
    )
}

export default FooterComponent;