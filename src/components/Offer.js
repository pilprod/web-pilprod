// React
import React from 'react';
// Next.js
import Image from 'next/image';
// Material-UI
import {
    makeStyles,
    styled,
    Box,
    Grid,
    Link
} from '@material-ui/core';

const Logo = () => <Image
    src="/logo.svg"
    alt="PILPROD"
    width={300}
    height={100}
/>

const Name = () => <Image
    src="/name.svg"
    alt="Ilya Popov"
    width={255}
    height={100}
/>

const LogoWrap = styled(Box)({
    paddingTop: '30px',
    width: '300px',
    height: '140px',
})

const H2Wrap = styled(Box)({
    width: '210px',
    height: '40px',
    align: 'center',
})

const TelegramLink = styled(Link)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    flexShrink: 0,
    variant: "button",
    color: '#0088cc',
    fontSize: '14pt',
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
    fontSize: '14pt',
})

const WhatsAppLinkIcon = styled(Box)({
    margin: '3px',
    padding: '4px',
})

const OfferComponent = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            paddingTop: '20px',
            align: 'center',
        },
        contact: {
            paddingTop: '20px',
        },
    }));

    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid item xs={12} md={12} className={classes.root}>
                <div align='center'>
                    <Image
                        src="/avatar.png"
                        alt="avatar_PILPROD"
                        width={300}
                        height={300}
                        className={classes.logo}
                    />
                </div>
            </Grid>
            <Grid item xs={12} md={12} className={classes.root}>
                <div align='center'>
                    <Link className={classes.logoWrap}
                        href="/"
                        // target="_blank"
                        rel="noopener noreferrer"
                        align='center'
                    >
                        <div align='center'>
                            <LogoWrap>
                                <Logo />
                                <h1 style={{ opacity: '.0', margin: '0', padding: '0' }}>PILPROD | Popov Ilya Production</h1>
                            </LogoWrap>
                        </div>
                    </Link>
                </div>
            </Grid>
            <Grid item xs={12} md={12} align='center'>
                <div align='center'>
                    <H2Wrap>
                        {/* <Name /> */}
                        <h2 style={{ opacity: '.0', margin: '0', padding: '0' }}>ILYA POPOV</h2>
                    </H2Wrap>
                </div>
            </Grid>
            <Grid container align="center" className={classes.contact}>
                <Grid item xs={6} md={6} >
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
                <Grid item xs={6} md={6}>
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
            </Grid>
        </React.Fragment >
    )
}

export default OfferComponent;