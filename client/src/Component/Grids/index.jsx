import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid({revenue, hours,projects,salary,holiday,sickDay}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
     
          <Grid item xs={2} sm={4} md={4} >
            <Item>
               <h3> Total revenue brought in by employee </h3>
               <p>{Math.round(revenue)}</p>
            </Item>
            <Item>
               <h3> Total hours worked </h3>
               <p>{Math.round(hours)}</p>
            </Item>
            <Item>
               <h3>Projects worked on </h3>
               <p>{'  '+projects +' '}</p>
            </Item>
            <Item>
               <h3>Employee salary</h3>
               <p>{'  '+salary +' '}</p>
            </Item>
            <Item>
               <h3>Holiday</h3>
               <p>{'  '+holiday +' '}</p>
            </Item>
            <Item>
               <h3>Sick leave</h3>
               <p>{'  '+sickDay +' '}</p>
            </Item>
          </Grid>
     
      </Grid>
    </Box>
  );
}
