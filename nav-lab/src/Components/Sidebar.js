import React from 'react';
import {SidebarData} from './SidebarData'
import { Avatar, IconButton } from '@mui/material';
import Container from '@mui/material';
import Grid from '@mui/material';
import { createTheme } from '@mui/system';
import Stack from '@mui/material';
import Switch from '@mui/material';
import AbcIcon from '@mui/icons-material/Abc';

const theme = createTheme({
    flexDirection: 'column',
    justifyContent: 'space-between'
});

const label = {inputProps: { 'aria label': 'Switch demo' }};

function Sidebar() {
  return (

    <Stack direction="collumn" spacing={20} margin={0}>
    <div className='Sidebar'>Sidebar
    <Container maxwidth="sm">
      <ul className="SidebarList">
      {SidebarData.map((val,key)=>{
        return(
          <li key = {key}
        className="row"
          onClick={()=>{window.location.pathname = val.link}}>
              {""}
              <Stack direction="row" spacing={2} margin={2}>
            <div id = "icon">{val.icon}</div>{""}
            <div id = "title">
              {val.title}
              </div>
              </Stack>
          </li>
        )

      })}

   </ul>
   </Container>
   <Stack direction="row" spacing={2} margin={2}>
    <AbcIcon/>
    <Switch {...label} defaultChecked/>
    </Stack>
    <Grid sx={{width: 30, height: 430}}></Grid>
<Stack direction="row" spacing={2} margin={2} style={theme}>
<Avatar>
<IconButton aria-label="add">
  <AddIcon/>
</IconButton>
</Avatar>
  </Stack>
    </div>
    <Stack/>
  )
}

export default Sidebar