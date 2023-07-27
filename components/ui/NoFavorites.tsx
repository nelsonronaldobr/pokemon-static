import { Container, Image, Text } from '@nextui-org/react';

export const NoFavorites = () => {
    return (
        <Container
            display='flex'
            direction='column'
            justify='center'
            alignItems='center'
            css={{
                alignSelf: 'center',
                height: 'calc(100vh - 110px)'
            }}>
            <Text h1 weight={'semibold'} css={{ opacity: '0.3' }}>
                No hay favoritos
            </Text>

            <Image
                src={
                    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/92.svg'
                }
                alt='Pokémon default'
                width={250}
                height={250}
                css={{
                    opacity: '0.3'
                }}
            />
        </Container>
    );
};
