import { darkTheme, lightTheme } from '@/theme';
import { ThemeProvider, createTheme } from '@mui/material';
import { createContext, useMemo, useState, useContext } from 'react';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const ColorModeProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }
    }),
    []
  );

  const darkThemeChose = useMemo(
    () =>
      createTheme({
        ...darkTheme
      }),
    []
  );

  const lightThemeChosen = useMemo(
    () =>
      createTheme({
        ...lightTheme
      }),
    []
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider
        theme={mode === 'dark' ? darkThemeChose : lightThemeChosen}
      >
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorModeCtx = () => useContext(ColorModeContext);
