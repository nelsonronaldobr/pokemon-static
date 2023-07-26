import { useEffect, useState } from 'react';
import { Layout } from '../../components/layouts';
import { FavoritePokemons, NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';
import { Card, Grid } from '@nextui-org/react';

const FavoritesApp = () => {
    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons());
    }, []);

    return (
        <Layout title='Pokémons - Favorites'>
            {favoritePokemons.length === 0 ? (
                <NoFavorites />
            ) : (
                <FavoritePokemons favoritePokemons={favoritePokemons} />
            )}
        </Layout>
    );
};

export default FavoritesApp;
