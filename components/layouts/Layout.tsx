import Head from 'next/head';
import React, { FC, ReactNode } from 'react';
import { Navbar } from '../ui';
import { Container } from '@nextui-org/react';

interface Props {
    children: ReactNode | JSX.Element[] | JSX.Element;
    title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name='author' content='Nelson Barrera' />
                <meta
                    name='description'
                    content='Información sobre los Pokémones'
                />
                <meta name='keywords' content='pokedex, pokemon' />
            </Head>
            <Navbar />
            <Container>
                <main
                    style={{
                        margin: '20px 0px'
                    }}>
                    {children}
                </main>
            </Container>
        </>
    );
};
