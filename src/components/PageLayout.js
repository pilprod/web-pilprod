// React
import React from 'react'
// Next.JS
import Head from 'next/head';
// Material-UI
import { Box } from '@material-ui/core';
// Header-Footer
import Header from "./Header";
import Footer from "./Footer";
// Data
// import { data } from "../data/data";

const PageLayout = ({ children, title, description, ogImage, vkImage, url }) => {
    // Root URL
    const pageUrl = "https://www.pilprod.com/";
    // When you share this page on facebook you'll see this image
    const ogImg = "https://www.pilprod.com/favicons/share-image-1200x630.png";
    const vkImg = "https://www.pilprod.com/favicons/share-image-510x228.png";
    return (
        <>
            <Head>
                {/* ROOT TITLE and description */}
                <title>{title ? title : "PILPROD | Popov Ilya Production"}</title>
                <meta name="description" key="description" content={description ? description : "PILPROD | Popov Ilya Production — Instagram, VK, YouTube, SoundCloud, Tik-Tok, Telegram, WhatsApp."} />
                {/* Favicons */}
                <link rel="icon" href="/favicons/favicon.ico" />
                <link rel="icon" href="/favicons/favicon-16x16.png" type="image/png" sizes="16x16" />
                <link rel="icon" href="/favicons/favicon-32x32.png" type="image/png" sizes="32x32" />
                <link rel="apple-touch-icon" href="favicons/apple-icon.png" sizes="180x180" />
                {/* Open Graph (Social Meadia share info) */}
                <meta property="og:title" content={title ? title : "PILPROD | Popov Ilya Production"} key="og:title" />
                <meta property="og:url" content={url ? url : pageUrl} key="og:url" />
                <meta property="og:image" content={ogImage ? ogImage : ogImg} key="og:image" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:description" content={description ? description : "PILPROD | Popov Ilya Production — Instagram, VK, YouTube, SoundCloud, Tik-Tok, Telegram, WhatsApp."} key="og:description" />
                {/* VK Image Open Graph */}
                <meta property="vk:image" content={vkImage ? vkImage : vkImg}/>
                <meta property="vk:image:width" content="510" />
                <meta property="vk:image:height" content="228" />
                {/* PWA */}
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <Header />
            <Box my={4} component='main'>
                {children}
            </Box>
            <Footer />
        </>
    )
};

export default PageLayout;