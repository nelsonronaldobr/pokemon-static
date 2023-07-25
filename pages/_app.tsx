import { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from '../theme';
import NextNProgress from 'nextjs-progressbar';
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <NextNProgress
                color=''
                options={{
                    showSpinner: false
                }}
                transformCSS={(defaultCSS) => {
                    const customCSS = `
                      /* Agrega tus estilos personalizados aquí */
                      .bar {
                        background: linear-gradient(112deg, #06b7db -63.59%, #0072f5 70.46%, #ff4ecd -20.3%);
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
