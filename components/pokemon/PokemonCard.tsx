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
                <Card.Body css={{ p: 0, overflow: 'hidden' }}>
                    <Card.Image
                        src={img}
                        alt={`Pokémon - ${id} - ${name}`}
                        css={{
                            transform: 'scale(1.1)',
                            backgroundPosition: 'center'
                        }}
                        width={'100%'}
                        height={140}
                    />
                </Card.Body>
                <Card.Footer>
                    <Card.Footer css={{ justifyItems: 'flex-start' }} isBlurred>
                        <Row wrap='wrap' justify='space-between' align='center'>
                            <Text b transform='capitalize'>
                                {pokemon.name}
                            </Text>
                            <Text weight={'bold'}>#{pokemon.id}</Text>
                        </Row>
                    </Card.Footer>
                </Card.Footer>
            </Card>
        </Grid>
    );
};
