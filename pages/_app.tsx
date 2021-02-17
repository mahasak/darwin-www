import '../styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0';

import type { AppProps /*, AppContext */ } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const { user } = pageProps;
  return (
    <UserProvider user={user}>
      <Component {...pageProps} />
    </UserProvider>

  )
}

export default MyApp
