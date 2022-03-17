import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import LoginPage from './login';
import { UserContext } from '../utils/UserContext';

function MyApp({ Component, pageProps }: AppProps) {
  let login = true;

  return login ? (
    <UserContext.Provider value={''}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext.Provider>
  ) : (
    <LoginPage />
  );
}

export default MyApp;
