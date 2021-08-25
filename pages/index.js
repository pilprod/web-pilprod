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
// Root Component
import PageLayout from '../src/components/PageLayout';

const Avatar = () => <Image
    src="/avatar.png"
    alt="avatar_PILPROD"
    width={250}
    height={250}
/>

const AvatarContainer = styled(({ ...other }) =>
    <Container
        maxWidth='lg'
        align='center'
        {...other} />
)({});

const DownloadLink = styled(Link)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    flexShrink: 0,
    variant: "button",
    color: '#E2E5E7',
    fontSize: '12pt',
})

const DownloadLinkIcon = styled(Box)({
    margin: '5px',
    padding: '5px',
})

const ContactLink = styled(Link)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    flexShrink: 0,
    variant: "button",
    color: '#FFD54F',
    fontSize: '12pt',
})

const ContactLinkIcon = styled(Box)({
    margin: '5px',
    padding: '5px',
})

const HomePage = () => {
    return (
        <React.Fragment>
            <PageLayout
                title="PILPROD | Резюме"
                description="PILPROD | Резюме"
            >
                <Box padding='5px'>
                    <AvatarContainer>
                        <Avatar />
                    </AvatarContainer>
                    <h2 style={{ width: '0px', height: '0px', opacity: '.0', margin: '0', padding: '0' }}>ILYA POPOV</h2>
                    <Box style={{ padding: '5px', paddingTop: '30px', paddingDown: '20px' }}>
                        <Grid container direction='row' justify='center' alignItems='baseline'>
                            <Grid item xs={6} md={4}>
                                <DownloadLink href='https://disk.yandex.ru/i/43XUsBE_xww4kg'>
                                    <DownloadLinkIcon>
                                        <Image
                                            src="/icons/pdf.svg"
                                            alt="pdf_logo"
                                            width={30}
                                            height={30}
                                        />
                                    </DownloadLinkIcon>
                                    <h3>Резюме.pdf</h3>
                                </DownloadLink>
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <DownloadLink href='https://disk.yandex.ru/i/s7N7ppjiq_Jbag'>
                                    <DownloadLinkIcon>
                                        <Image
                                            src="/icons/yandex-disk.svg"
                                            alt="ydisk-logo"
                                            width={30}
                                            height={30}
                                        />
                                    </DownloadLinkIcon>
                                    <h3>Резюме-для-Яндекс.pdf</h3>
                                </DownloadLink>
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <ContactLink href='https://www.pilprod.com/contact'>
                                    <ContactLinkIcon>
                                        <Image
                                            src="/icons/email.svg"
                                            alt="email_logo"
                                            width={30}
                                            height={30}
                                        />
                                    </ContactLinkIcon>
                                    <h3>Связаться</h3>
                                </ContactLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </PageLayout>
        </React.Fragment>
    )
}

export default HomePage;