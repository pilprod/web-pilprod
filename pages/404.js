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

const Page404 = () => {
    return (
        <React.Fragment>
            <PageLayout
                title="404 - Страница не найдена  | PILPROD"
                description="404 - Страница не найдена | PILPROD"
            >
                <Box align='center' justifyContent='center'>
                    <Container maxWidth='lg'>
                        <h1>404 - Страница не найдена</h1>
                        <Button href="/" color='primary' variant='outlined'>На главную</Button>
                    </Container>
                </Box>
            </PageLayout>
        </React.Fragment>
    )
}

export default Page404;