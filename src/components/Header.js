// React
import React from 'react';
// Props
import PropTypes from 'prop-types';
// Next.js
import Image from 'next/image';
// Material-UI
import {
    styled,
    makeStyles,
    withStyles,
    Box,
    Grid,
    Container,
    Toolbar,
    Link,
    Hidden,
    Button,
} from '@material-ui/core';

const Logo = () => <Image
    src="/logo.svg"
    alt="PILPROD"
    width={300}
    height={100}
/>

const LogoWrap = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '300px',
    height: '100px',
})

const HeaderBox = styled(Box)(({ theme }) => ({
}));

const HeaderToolbarLogo = styled(Box)(({ theme }) => ({
    display: 'flex',
    align: 'center',
    justifyContent: 'center',
    alignItems: 'center',
}));

const HeaderToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '5px',
    // borderTop: `1px solid ${theme.palette.divider}`,
    // borderBottom: `1px solid ${theme.palette.divider}`,
}));

const HeaderTitle = styled(({ ...other }) => <Container align='center' {...other} />)({
    padding: '10px',
    justifyContent: 'center',
    alignItems: 'center',
});

const HeaderLink = styled(Link)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    padding: theme.spacing(0),
    flexShrink: 0,
}));

const HeaderLinkIcon = styled(Box)(({ theme }) => ({
    margin: '5px',
    padding: '5px',
}));






const HeaderComponent = (props) => {

    return (
        <React.Fragment >
            <HeaderBox component='header'>
                <HeaderToolbarLogo>
                    <HeaderTitle>
                        <Link href='/'>
                            <LogoWrap>
                                <Logo />
                                <h1 style={{ width: '0px', height: '0px', opacity: '.0', margin: '0', padding: '0' }}>PILPROD | Popov Ilya Production</h1>
                            </LogoWrap>
                        </Link>
                    </HeaderTitle>
                </HeaderToolbarLogo>
                <HeaderToolbar variant='dense'>
                    <HeaderLink
                        variant="button"
                        color="textPrimary"
                        href="http://instagram.pilprod.com"
                    >
                        <HeaderLinkIcon>
                            <Image
                                src="/icons/instagram.svg"
                                alt="pilprod_instagram"
                                width={25}
                                height={25}
                            />
                        </HeaderLinkIcon>
                        <Hidden smDown>
                            Instagram
                        </Hidden>
                    </HeaderLink>
                    <HeaderLink
                        color="textPrimary"
                        noWrap
                        variant="button"
                        href='http://vk.pilprod.com'
                    >
                        <HeaderLinkIcon>
                            <Image
                                src="/icons/vk.svg"
                                alt="pilprod_vk"
                                width={30}
                                height={30}
                            />
                        </HeaderLinkIcon>
                        <Hidden smDown>
                            VK
                        </Hidden>
                    </HeaderLink>
                    <HeaderLink
                        variant="button"
                        color="textPrimary"
                        href="https://github.com/pilprod"
                    >
                        <HeaderLinkIcon>
                            <Image
                                src="/icons/github.svg"
                                alt="pilprod_github"
                                width={25}
                                height={25}
                            />
                        </HeaderLinkIcon>
                        <Hidden smDown>
                            GitHub
                        </Hidden>
                    </HeaderLink>
                    <HeaderLink
                        variant="button"
                        color="textPrimary"
                        href="http://youtube.pilprod.com"
                    >
                        <HeaderLinkIcon>
                            <Image
                                src="/icons/youtube.svg"
                                alt="pilprod_youtube"
                                width={30}
                                height={30}
                            />
                        </HeaderLinkIcon>
                        <Hidden smDown>
                            YouTube
                        </Hidden>
                    </HeaderLink>
                    <HeaderLink
                        variant="button"
                        color="textPrimary"
                        href="http://soundcloud.pilprod.com"
                    >
                        <HeaderLinkIcon>
                            <Image
                                src="/icons/soundcloud.svg"
                                alt="pilprod_soundcloud"
                                width={30}
                                height={30}
                            />
                        </HeaderLinkIcon>
                        <Hidden smDown>
                            SoundCloud
                        </Hidden>
                    </HeaderLink>
                    {/* <HeaderLink
                        variant="button"
                        color="textPrimary"
                        href="http://tiktok.pilprod.com"
                    >
                        <HeaderLinkIcon>
                            <Image
                                src="/icons/tiktok.svg"
                                alt="pilprod_tiktok"
                                width={25}
                                height={25}
                            />
                        </HeaderLinkIcon>
                        <Hidden smDown>
                            TikTok
                        </Hidden>
                    </HeaderLink> */}
                </HeaderToolbar>
            </HeaderBox>
        </React.Fragment >
    )
}

export default HeaderComponent;