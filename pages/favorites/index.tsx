import { Container, Loading, Spacer, Text } from '@nextui-org/react';
import { Layout } from '../../components/layouts';

const index = () => {
    return (
        <Layout>
            <Container
                display='flex'
                justify='center'
                alignItems='center'
                css={{
                    height: '60vh'
                }}>
                <Text h1>coming soon</Text>
                <Spacer />
                <Loading size='xl' type='spinner' />
            </Container>
        </Layout>
    );
};

export default index;
