import { GetStaticPaths, GetStaticProps } from 'next';
import { FC, useEffect, useState } from 'react';
import { pokeApi } from '../../api';
import { Pokemon, PokemonListResponse } from '../../interfaces';
import { Layout } from '../../components/layouts';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { ButtonsContainer } from '../../components/ui';
import { getPokemonInfo, localFavorites } from '../../utils';
import { useRouter } from 'next/router';
import confetti from 'canvas-confetti';

interface Props {
    pokemon: Pokemon;
}

const PokemonByNamePage: FC<Props> = ({ pokemon }) => {
    const [isInFavorites, setIsInFavorites] = useState(
        typeof window === 'undefined' &&
            localFavorites.existInFavorite({ id: pokemon.id })
    );

    const router = useRouter();

    const onClick = () => {
        router.push('/');
    };

    const onToggleFavorite = () => {
        localFavorites.toggleFavorite({ id: pokemon.id });
        setIsInFavorites(!isInFavorites);
        if (isInFavorites) return;

        confetti({
            zIndex: 999,
            particleCount: 200,
            spread: 160,
            angle: -90,
            origin: {
                x: 0.5,
                y: -0.2
            }
        });
    };

    useEffect(() => {
        setIsInFavorites(localFavorites.existInFavorite({ id: pokemon.id }));
    }, [pokemon.id]);

    return (
        <Layout title={`${pokemon.name}`}>
            <Grid.Container gap={2}>
                <Grid xs={12} sm={4}>
                    <Card isHoverable css={{ padding: '30px' }}>
                        <Card.Body>
                            <Card.Image
                                src={
                                    pokemon.sprites.other?.dream_world
                                        .front_default || 'no-image'
                                }
                                alt={`Pokémon - ${pokemon.id} - ${pokemon.name}`}
                                width={'100%'}
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header
                            css={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap'
                            }}>
                            <Text h1 transform='capitalize'>
                                {pokemon.name}
                            </Text>
                            <ButtonsContainer>
                                <Button
                                    shadow
                                    onPress={onToggleFavorite}
                                    color={'gradient'}
                                    ghost={!isInFavorites}>
                                    {isInFavorites
                                        ? 'In favorites'
                                        : 'Save to favorites'}
                                </Button>
                                <Button
                                    shadow
                                    color='gradient'
                                    ghost
                                    onPress={onClick}>
                                    Return
                                </Button>
                            </ButtonsContainer>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites:</Text>
                            <Container display='flex' direction='row' gap={0}>
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const { data } = await pokeApi<PokemonListResponse>('/pokemon', {
        params: {
            limit: 151
        }
    });

    return {
        paths: data.results.map(({ name }) => ({
            params: { name }
        })),
        fallback: false
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { name } = params as { name: string };

    return {
        props: {
            pokemon: await getPokemonInfo({ nameOrId: name })
        }
    };
};

export default PokemonByNamePage;
