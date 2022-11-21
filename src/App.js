import { useState, useEffect } from 'react'
import * as React from 'react';
import Parse from 'parse/dist/parse.min.js';
import axios from 'axios'
import './index.css'
import Count from "./Count";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Fireworks } from '@fireworks-js/react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

var shown = "100%"



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



  export default function App() {
  const juhlat = [[2001, 3-1, 19, "Paavo"], [2005, 12-1, 19, "Veera"],
    [1970, 11-1, 21, "Kaj"], [2012, 5-1, 17, "Laura"],
    [1974, 5-1, 8, "Satu"], [1952, 10-1, 11, "Fammu"],
    [1970, 12-1, 24, "Joulu"], [2012, 6-1, 24, "Juhannus"],
    [1974, 11-1, 13, "Isänpäivä"], [1971, 5-1, 14, "Äitienpäivä"]]

  const [alignment, setAlignment] = useState('pois');
  const [fireworkIsShown, setFireworkShown] = React.useState(false);
  const [bdayIsShown, setBdayShown] = useState(false);
  const [juhlittava, setJuhlittava] = useState("");

  const handleChange = (event, newAlignment) => {
    if(newAlignment !== null){
      setAlignment(newAlignment);
      setFireworkShown(current => !current);
    }
    
  };

  /*function onkopaiva(year, month, day, kuka){
    var today = new Date();
    var bday = new Date(year, month, day);
    if(today.getDate() === bday.getDate() && today.getMonth() === bday.getMonth()){
      console.log("täällä ollaan")
      setBdayShown(true)
      juhlittava = kuka
    }
  }*/
  
  function aika(year, month, day, kuka) {
    var today = new Date();
    var bday = new Date(year, month, day);
    bday.setFullYear(today.getFullYear());
    if( today.getTime() > bday.getTime()) {
      bday.setFullYear(bday.getFullYear()+1);
    }
    //console.log(bday.toString())
    return bday
  }

  

  useEffect(() => {
    for (let i = 0; i < juhlat.length; i++) {
      var today = new Date();
      var bday = new Date(juhlat[i][0], juhlat[i][1], juhlat[i][2]);
      if(today.getDate() === bday.getDate() && today.getMonth() === bday.getMonth()){
        console.log("synttäricheck")
        setBdayShown(true)
        setJuhlittava(juhlat[i][3])
      }
    }
  }, [juhlat]);
  
  return (
    <body>
      
      <div>
      <ThemeProvider theme={theme} className="Yms">
        <h1>Merkkipäivämuistutin</h1>
        {!bdayIsShown && (
          <h2>Tänään ei ole kenenkään synttärit tai mikään(tärkeä) julhapäivä</h2>
        )}
        {bdayIsShown && (
          <h2>Hurraa, {juhlittava}! Muista onnitella :)</h2>
        )}
        {fireworkIsShown && <Fireworkshow />}
        <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item><Count deadlinetext="19.3" deadline={aika(2001, 3-1, 19, "Paavo").toString()} name="Paavo" text="Aikaa synttäreihin"/></Item>
          </Grid>
          <Grid item xs={6}>
            <Item><Count deadlinetext="19.12" deadline={aika(2005, 12-1, 19, "Veera").toString()} name="Veera" text="Aikaa synttäreihin"/></Item>
          </Grid>
          <Grid item xs={6}>
            <Item><Count deadlinetext="21.11" deadline={aika(1970, 11-1, 21, "Kaj").toString()} name="Kaj" text="Aikaa synttäreihin"/></Item>
          </Grid>
          <Grid item xs={6}>
            <Item><Count deadlinetext="17.5" deadline={aika(2012, 5-1, 17, "Laura").toString()} name="Laura" text="Aikaa synttäreihin"/></Item>
          </Grid>
          <Grid item xs={6}>
            <Item><Count deadlinetext="8.5" deadline={aika(1974, 5-1, 8, "Satu").toString()} name="Satu" text="Aikaa synttäreihin"/></Item>
          </Grid>
          <Grid item xs={6}>
            <Item><Count deadlinetext="29.7" deadline={aika(1952, 10-1, 11, "Fammu").toString()} name="Fammu" text="Aikaa synttäreihin"/></Item>
          </Grid>
          <Grid item xs={6}>
            <Item><Count deadlinetext="24.12" deadline={aika(1970, 11-1, 21, "Joulu").toString()} name="Joulu" text="Aikaa juhlaan"/></Item>
          </Grid>
          <Grid item xs={6}>
            <Item><Count deadlinetext="24.6" deadline={aika(2012, 6-1, 24, "Juhannus").toString()} name="Juhannus" text="Aikaa juhlaan"/></Item>
          </Grid>
          <Grid item xs={6}>
            <Item><Count deadlinetext="13.11" deadline={aika(1974, 11-1, 13, "Isänpäivä").toString()} name="Isänpäivä" text="Aikaa juhlaan"/></Item>
          </Grid>
          <Grid item xs={6}>
            <Item><Count deadlinetext="14.5" deadline={aika(1971, 5-1, 14, "Äitienpäivä").toString()} name="Äitienpäivä" text="Aikaa juhlaan"/></Item>
          </Grid>
          </Grid>
          <div className='Pohja'>
            <h3>Hyvää isänpäivää 2022. Lahjan tuottaneet Paavo ja Veera</h3>
          </div>
        </Box>
        
        
      </ThemeProvider>
      </div>
      
      <ToggleButtonGroup className='Nappi'
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="paalle">Juhlista vähäsen!</ToggleButton>
          <ToggleButton value="pois">Ei tänään</ToggleButton>
        </ToggleButtonGroup>
      <p className="Trademark">Isänpäiväsivut tuottaneet: Veera ja Paavo, (2022)</p>
      <h1> </h1>
    </body>
    
    
  )

}

function Fireworkshow() {
  return(
    <Fireworks className='Firework'
      options={{
        rocketsPoint: {
          min: 0,
          max: 100
        }
      }}
      style={{
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        position: "fixed",
        background: "rgba(0, 0, 0, 0.0)",
      }}
    />
  )
}