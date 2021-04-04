// React
import React from 'react';
// Root Component
import PageLayout from '../src/components/PageLayout';

const Page500 = () => {
    return (
        <React.Fragment>
            <PageLayout
                title="500 - Ошибка сервера  | PILPROD"
                description="500 - Ошибка сервера | PILPROD"
            >
                <h1>500 - Ошибка сервера</h1>
            </PageLayout>
        </React.Fragment>
    )
}

export default Page500;