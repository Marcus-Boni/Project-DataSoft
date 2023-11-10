import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import {
  ColorModeProvider,
  useColorModeCtx
} from '@/contexts/ColorModeContext';
import { Header } from '@/components/Header';
import { createContext } from 'react';

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  const ColorModeContext = createContext({ toggleColorMode: () => {} });

  return (
    <ColorModeProvider>
      <SessionProvider session={session}>
        <CssBaseline />
        <Header ColorModeContext={ColorModeContext} />
        <Component {...pageProps} />
      </SessionProvider>
    </ColorModeProvider>
  );
}
