import React from 'react'
import { Box } from '@mui/material';
import { ThemeProvider } from "@mui/material/styles";
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/slice/themeSlice';
import { darkTheme, lightTheme } from '../../theme/theme';
import { RootState } from '../../redux/store';


const ModeCtrl = () => {

  const theme = useSelector( (state:RootState) => state.theme)
  const dispatch = useDispatch()

  return (
    <ThemeProvider theme={theme.darkTheme? darkTheme:lightTheme}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 1,
        }}
      >
        <IconButton sx={{ ml: 1}} 
        onClick={(e) => dispatch(toggleTheme())} color="inherit">
          {theme.darkTheme ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
    </Box>
  </ThemeProvider>
  )
}

export default ModeCtrl