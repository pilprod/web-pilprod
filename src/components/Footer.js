// React
import React from 'react';
// Material-UI
import {
    styled,
    Box,
} from '@material-ui/core';
// Components
import CopyrightComponent from './Copyright';


const Footer = styled(Box)({
    width: '100%',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

const FooterComponent = (props) => {

    return (
        <React.Fragment>
            <Footer component="footer">
                <CopyrightComponent />
            </Footer>
        </React.Fragment>
    )
}

export default FooterComponent;