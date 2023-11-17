import { IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useColorModeCtx } from '@/contexts/ColorModeContext';

export type ThemeToggleButtonProps = {
  ColorModeContext: React.Context<{ toggleColorMode: () => void }>;
};

export const ThemeToggleButton = (props: ThemeToggleButtonProps) => {
  const mobileCheck = useMediaQuery('(min-width:500px)');
  const colorMode = useColorModeCtx();
  const theme = useTheme();

  return (
    <>
      {mobileCheck && <Typography>{theme.palette.mode}</Typography>}
      <IconButton
        sx={{ mr: 2 }}
        title={theme.palette.mode + ' mode'}
        aria-label={theme.palette.mode + ' mode button'}
        onClick={colorMode.toggleColorMode}
      >
        {theme.palette.mode === 'dark' ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </>
  );
};
