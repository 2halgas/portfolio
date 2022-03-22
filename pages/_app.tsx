import 'styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import store from 'src/common/store/store';
import { AppContainer, AppHead } from 'src/components/layouts';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
  <Provider store={store}>
    <AppHead />
    <AppContainer>
            <Component {...pageProps} />
    </AppContainer>
  </Provider>
        )
}

export default MyApp
