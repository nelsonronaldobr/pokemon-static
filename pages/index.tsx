import { GetStaticProps, NextPage } from 'next';
import { Layout } from '../components/layouts';
import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { Grid } from '@nextui-org/react';
import { PokemonCard } from '../components/pokemon';

interface Props {
    pokemons: SmallPokemon[];
}
const Home: NextPage<Props> = ({ pokemons }) => {
    return (
        <Layout title='Listado de Pokémons'>
            <Grid.Container gap={2} justify='flex-start'>
                {pokemons.map((pokemon, index) => (
                    <PokemonCard pokemon={pokemon} key={index} />
                ))}
            </Grid.Container>
        </Layout>
    );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { data } = await pokeApi<PokemonListResponse>('/pokemon', {
        params: {
            limit: 151
        }
    });

    const pokemons = data.results.map((pokemon) => {
        const id = pokemon.url.split('/').reverse()[1];
        const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
        return {
            ...pokemon,
            id,
            img
        };
    });

    return {
        props: {
            pokemons
        }
    };
};
export default Home;
