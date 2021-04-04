// React
import React from 'react';
// Root Component
import PageLayout from '../../src/components/PageLayout';
// Components
import FormComponent from '../../src/components/Form';

const ContactPage = () => {
    return (
        <React.Fragment>
            <PageLayout
                title="PILPROD | Форма связи"
                description="PILPROD | Форма связи"
            >
                <FormComponent />
            </PageLayout>
        </React.Fragment>
    )
}

export default ContactPage;