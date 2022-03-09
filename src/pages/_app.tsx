import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import LoginPage from './login';

function MyApp({ Component, pageProps }: AppProps) {
  let login = true;

  return login ? (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) : (
    <LoginPage />
  );
}

export default MyApp;
