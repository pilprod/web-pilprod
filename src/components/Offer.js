// React
import React from 'react';
// Next.js
import Image from 'next/image';
// Material-UI
import {
    makeStyles,
    styled,
    Box,
    Container,
    Grid,
    Link
} from '@material-ui/core';

const Avatar = () => <Image
    src="/avatar.png"
    alt="avatar_PILPROD"
    width={300}
    height={300}
/>

const AvatarContainer = styled(({ ...other }) =>
    <Container
        maxWidth='lg'
        align='center'
        {...other} />
)({});

const TelegramLink = styled(Link)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    flexShrink: 0,
    variant: "button",
    color: '#0088cc',
    fontSize: '12pt',
})

const TelegramLinkIcon = styled(Box)({
    margin: '5px',
    padding: '5px',
})

const WhatsAppLink = styled(Link)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    flexShrink: 0,
    variant: "button",
    color: '#25D366',
    fontSize: '12pt',
})

const WhatsAppLinkIcon = styled(Box)({
    margin: '3px',
    padding: '4px',
})

const OfferComponent = () => {
    return (
        <React.Fragment>
            <Box padding='5px'>
                <AvatarContainer>
                    <Avatar />
                </AvatarContainer>
                <h2 style={{ width: '0px', height: '0px', opacity: '.0', margin: '0', padding: '0' }}>ILYA POPOV</h2>
                <Box style={{ padding: '5px', paddingTop: '30px', paddingDown: '20px' }}>
                    <Grid container direction='row' justify='center' alignItems='baseline'>
                        <Grid item xs={6} md={4}>
                            <WhatsAppLink href='http://whatsapp.pilprod.com/'>
                                <WhatsAppLinkIcon>
                                    <Image
                                        src="/icons/whatsapp.svg"
                                        alt="whatsapp_logo"
                                        width={30}
                                        height={30}
                                    />
                                </WhatsAppLinkIcon>
                                <h3>WHATSAPP</h3>
                            </WhatsAppLink>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TelegramLink href='http://telegram.pilprod.com'>
                                <TelegramLinkIcon>
                                    <Image
                                        src="/icons/telegram.svg"
                                        alt="telegram_logo"
                                        width={30}
                                        height={30}
                                    />
                                </TelegramLinkIcon>
                                <h3>TELEGRAM</h3>
                            </TelegramLink>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </React.Fragment >
    )
}

export default OfferComponent;