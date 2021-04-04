// React
import React from 'react';
// Root Component
import PageLayout from '../src/components/PageLayout';
// Components
import OfferComponent from '../src/components/Offer';

const HomePage = () => {
    return (
        <React.Fragment>
            <PageLayout
                title="PILPROD | Popov Ilya Production"
                description="PILPROD | Popov Ilya Production — Instagram, VK, YouTube, SoundCloud, Tik-Tok, Telegram, WhatsApp."
            >
                <OfferComponent />
            </PageLayout>
        </React.Fragment>
    )
}

export default HomePage;