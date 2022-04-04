import 'styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import store from 'src/common/store/store';
import { AppContainer, AppHead } from 'src/components/layouts';
import { ThemeProvider } from "next-themes";
import {  ToastContainer, Zoom } from 'react-toastify';
import Script from 'next/script';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
  <Provider store={store}>
      <ThemeProvider>
        <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
        <Script strategy="lazyOnload">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
                });
            `}
        </Script>
        <AppHead />
        <AppContainer>
      <ToastContainer transition={Zoom} />
                <Component {...pageProps} />
        </AppContainer>
    </ThemeProvider>
  </Provider>
        )
}

export default MyApp
