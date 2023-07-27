import { Link, Navbar, Text } from '@nextui-org/react';
import Image from 'next/image';
import NextLink from 'next/link';

export const NavbarUI = () => {
    return (
        <Navbar
            isBordered
            variant={'sticky'}
            maxWidth={'xl'}
            shouldHideOnScroll>
            <Navbar.Brand>
                <Link href='/' as={NextLink}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '8px',
                            alignItems: 'center'
                        }}>
                        <Image
                            src={
                                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/92.svg'
                            }
                            alt='Pokémon default'
                            width={40}
                            height={40}
                        />
                        <Text color='white' h2>
                            P
                        </Text>
                    </div>
                    <Text color='white' h3>
                        okémon
                    </Text>
                    <Text color='white' h3>
                        !
                    </Text>
                </Link>
            </Navbar.Brand>
            <Navbar.Content>
                <Navbar.Link color='inherit' href='/favorites' as={NextLink}>
                    <Text color='white' h4>
                        Favorites
                    </Text>
                </Navbar.Link>
            </Navbar.Content>
        </Navbar>
    );
};
