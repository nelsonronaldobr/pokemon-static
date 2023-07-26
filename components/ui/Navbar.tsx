//import { Navbar, Button, Link, Text } from '@nextui-org/react';

import { Container, Link, Spacer, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';
import NextLink from 'next/link';

/* export const NavbarUI = () => {
    return (
        <Navbar isBordered variant={'floating'}>
            <Navbar.Brand>
                <Text b color='inherit' hideIn='xs'>
                    ACME
                </Text>
            </Navbar.Brand>
            <Navbar.Content hideIn='xs'>
                <Navbar.Link href='#'>Features</Navbar.Link>
                <Navbar.Link isActive href='#'>
                    Customers
                </Navbar.Link>
                <Navbar.Link href='#'>Pricing</Navbar.Link>
                <Navbar.Link href='#'>Company</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Link color='inherit' href='#'>
                    Login
                </Navbar.Link>
                <Navbar.Item>
                    <Button auto flat as={Link} href='#'>
                        Sign Up
                    </Button>
                </Navbar.Item>
            </Navbar.Content>
        </Navbar>
    );
};
 */

export const Navbar = () => {
    const { theme } = useTheme();

    return (
        <header
            style={{
                backgroundColor: theme?.colors.gray100.value
            }}>
            <Container>
                <nav
                    style={{
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'start'
                    }}>
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

                    <Spacer css={{ flex: 1 }} />
                    <Link href='/favorites' as={NextLink}>
                        <Text color='white' h4>
                            Favorites
                        </Text>
                    </Link>
                </nav>
            </Container>
        </header>
    );
};
