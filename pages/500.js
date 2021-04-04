// React
import React from 'react';
// Root Component
import PageLayout from '../src/components/PageLayout';
// Material-UI
import {
    Box,
    Container,
    Button,
} from '@material-ui/core';

const Page500 = () => {
    return (
        <React.Fragment>
            <PageLayout
                title="500 - Ошибка сервера  | PILPROD"
                description="500 - Ошибка сервера | PILPROD"
            >
                <Box align='center' justifyContent='center'>
                    <Container maxWidth='lg'>
                        <h1>500 - Ошибка сервера</h1>
                        <Button href="/" color='primary' variant='outlined'>На главную</Button>
                    </Container>
                </Box>
            </PageLayout>
        </React.Fragment>
    )
}

export default Page500;