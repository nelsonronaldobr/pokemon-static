import { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Layout } from '../../components/layouts';
import { pokeApi } from '../../api';
import { Pokemon, PokemonListResponse } from '../../interfaces';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { localFavorites } from '../../utils';
import styled from 'styled-components';

interface Props {
    pokemon: Pokemon;
}

const ButtonsContainer = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: end;
    align-items: center;
    flex: 1;
`;

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
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
    };

    useEffect(() => {
        setIsInFavorites(localFavorites.existInFavorite({ id: pokemon.id }));
    }, [pokemon.id]);

    return (
        <Layout title={`Pokémon - ${pokemon.name}`}>
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
                                    onPress={onToggleFavorite}
                                    color={'gradient'}
                                    ghost={!isInFavorites}>
                                    {isInFavorites
                                        ? 'In favorites'
                                        : 'Save to favorites'}
                                </Button>
                                <Button
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

    const { data } = await pokeApi<Pokemon>(`/pokemon/${name}`);

    return {
        props: {
            pokemon: data
        }
    };
};

export default PokemonPage;
