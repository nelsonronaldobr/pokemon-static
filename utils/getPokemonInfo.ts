import { pokeApi } from '../api';
import { Pokemon } from '../interfaces';
import { extractProperty } from './extractProperty';

export const getPokemonInfo = async ({ nameOrId }: { nameOrId: string }) => {
    try {
        const { data } = await pokeApi<Pokemon>(`/pokemon/${nameOrId}`);

        return {
            id: extractProperty(data, 'id'),
            name: extractProperty(data, 'name'),
            sprites: extractProperty(data, 'sprites'),
            types: extractProperty(data, 'types')
        };
    } catch (error) {
        return null;
    }
};
