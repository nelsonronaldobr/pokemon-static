import { Card, Grid } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface Props {
    id: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ id }) => {
    const router = useRouter();

    const onClick = () => {
        router.push(`/pokemon/${id}`);
    };

    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={id} onClick={onClick}>
            <Card isHoverable isPressable>
                <Card.Body>
                    <Card.Image
                        alt={`Pokémon - ${id}`}
                        width={'100%'}
                        height={140}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    />
                </Card.Body>
            </Card>
        </Grid>
    );
};
