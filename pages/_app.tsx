import { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from '../theme';
import NextNProgress from 'nextjs-progressbar';
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <NextNProgress
                color={''}
                options={{
                    showSpinner: false
                }}
                showOnShallow={false}
                height={4}
                transformCSS={(defaultCSS) => {
                    const customCSS = `
                        .bar {
                            background: rgb(255,26,103);
                            background: linear-gradient(135deg, rgba(255,26,103,1) 0%, rgba(98,108,251,1) 44%, rgba(255,26,103,1) 88%);
                        }
                    `;
                    return <style>{defaultCSS + customCSS}</style>;
                }}
            />
            <NextUIProvider theme={darkTheme}>
                <Component {...pageProps} />
            </NextUIProvider>
        </>
    );
}

export default MyApp;
