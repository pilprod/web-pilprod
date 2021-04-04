// React
import React from 'react';
// Next.js
import Image from 'next/image';
// Material-UI
import {
    makeStyles,
    Container,
    Toolbar,
    Link,
    Hidden
} from '@material-ui/core';


const PCToolBar = () => {

    const useStyles = makeStyles((theme) => ({
        appBar: {
            flexGrow: '1',
            backgroundColor: theme.palette.background.paper,
            borderBottom: `1px solid ${theme.palette.divider}`,
        },
        toolbar: {
            // flexWrap: 'wrap',
            justifyContent: 'space-between',
            overflowX: 'auto',
            flexShrink: 0,
        },
        logoWrap: {
            flexGrow: 1,
        },
        link: {
            margin: theme.spacing(1, 2.5, 1),
            align: 'center'
        },
        logo: {
            align: 'center',
            // height: '4rm',
        },
        toolbarSecondary: {
            width: '100%',
            justifyContent: 'space-between',
            overflowX: 'auto',
        },
        toolbarLink: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
            padding: theme.spacing(1),
            flexShrink: 0,
        },
        toolbarIcon: {
            margin: '2px',
            padding: '6px',
        },
    }));

    const classes = useStyles();

    return (
        <React.Fragment >
            <Container maxWidth='lg' component='header' >
                <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                    <Link variant="button" color="textPrimary" href="http://instagram.pilprod.com" className={classes.toolbarLink}>
                        <div className={classes.toolbarIcon}>
                            <Image
                                src="/icons/instagram.svg"
                                alt="pilprod_instagram"
                                width={25}
                                height={25}
                            />
                        </div>
                        <Hidden smDown>
                            Instagram
                        </Hidden>
                    </Link>
                    <Link
                        color="textPrimary"
                        noWrap
                        variant="button"
                        href='http://vk.pilprod.com'
                        className={classes.toolbarLink}
                    >
                        <div className={classes.toolbarIcon}>
                            <Image
                                src="/icons/vk.svg"
                                alt="pilprod_vk"
                                width={30}
                                height={30}
                            />
                        </div>
                        <Hidden smDown>
                            VK
                        </Hidden>
                    </Link>
                    <Link variant="button" color="textPrimary" href="http://youtube.pilprod.com" className={classes.toolbarLink}>
                        <div className={classes.toolbarIcon}>
                            <Image
                                src="/icons/youtube.svg"
                                alt="pilprod_youtube"
                                width={30}
                                height={30}
                            />
                        </div>
                        <Hidden smDown>
                            YouTube
                        </Hidden>
                    </Link>
                    <Link variant="button" color="textPrimary" href="http://soundcloud.pilprod.com" className={classes.toolbarLink}>
                        <div className={classes.toolbarIcon}>
                            <Image
                                src="/icons/soundcloud.svg"
                                alt="pilprod_soundcloud"
                                width={30}
                                height={30}
                            />
                        </div>
                        <Hidden smDown>
                            SoundCloud
                        </Hidden>
                    </Link>
                    <Link variant="button" color="textPrimary" href="http://tiktok.pilprod.com" className={classes.toolbarLink}>
                        <div className={classes.toolbarIcon}>
                            <Image
                                src="/icons/tiktok.svg"
                                alt="pilprod_tiktok"
                                width={25}
                                height={25}
                            />
                        </div>
                        <Hidden smDown>
                            TikTok
                        </Hidden>
                    </Link>
                </Toolbar>
            </Container>
        </React.Fragment >
    )


}

const HeaderComponent = () => {
    return (
        <React.Fragment>
            <PCToolBar />
        </React.Fragment>
    )
}

export default HeaderComponent;