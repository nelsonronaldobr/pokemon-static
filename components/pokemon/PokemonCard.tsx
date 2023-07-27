import { FC } from 'react';
import { SmallPokemon } from '../../interfaces';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
interface Props {
    pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
    const { id, img, name } = pokemon;

    const router = useRouter();

    const onClick = () => {
        router.push(`/name/${name}`);
    };

    return (
        <Grid xs={6} key={id} sm={3} md={2} xl={1}>
            <Card isHoverable isPressable onClick={onClick}>
                <Card.Body>
                    <Card.Image
                        src={img}
                        alt={`Pokémon - ${id} - ${name}`}
                        width={'100%'}
                        height={140}
                    />
                </Card.Body>
                <Card.Footer>
                    <Row justify='space-between'>
                        <Text transform='capitalize'>{name}</Text>
                        <Text>#{id}</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    );
};
