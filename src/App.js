import { useState, useEffect } from 'react'
import Parse from 'parse/dist/parse.min.js';
import axios from 'axios'
import storage from './services/storage'
import './index.css'
import Count from "./Count";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

function aika(year, month, day) {
  var today = new Date();
  var bday = new Date(year, month, day);
  bday.setFullYear(today.getFullYear())
  if( today.getTime() > bday.getTime()) {
    bday.setFullYear(bday.getFullYear()+1);
  }
  //console.log(bday.toString())
  return bday.toString()
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.text.primary,
  },
}));

const theme = createTheme({
  palette: {
    type: 'dark',
    text:{
      main: '#fff'
    },
    primary: {
      main: '#00bcd4',
    },
    secondary: {
      main: '#f50057',
    },
  },
});


const App = () => {
  
  return (
    <body>
      <div>
      <ThemeProvider theme={theme}>
        <h1>Synttärimuistuttaja</h1>
        <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item><Count deadline={aika(2001, 3-1, 19)} name="Paavo" text="Aikaa synttäreihin"/></Item>
          </Grid>
          <Grid item xs={6}>
            <Item><Count deadline={aika(2005, 12-1, 19)} name="Veera" text="Aikaa synttäreihin"/></Item>
          </Grid>
          <Grid item xs={6}>
            <Item><Count deadline={aika(1970, 11-1, 21)} name="Kaj" text="Aikaa synttäreihin"/></Item>
          </Grid>
          <Grid item xs={6}>
            <Item><Count deadline={aika(2012, 6-1, 15)} name="Laura" text="Aikaa synttäreihin"/></Item>
          </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
      </div>
      <p className="Trademark">Isänpäiväsivut tuottaneet: Veera ja Paavo, (2022)</p>
    </body>
    
    
  )

}

export default App