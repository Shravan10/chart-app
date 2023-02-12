
import './App.css';
import BarChart from './component/bar-chart';
import PieChart from './component/pie-chart';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FunnelChart from './component/funnel-chart';
import MultiSetBar from './component/multi-set-bar';
import DynamicDataChart from './component/dynamic-data-chart';
import StackedChartData from './component/stacked-chart';
import StackedLine from './component/stacked-line';
import LineChart from './component/line-chart';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Item>
            <BarChart/>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <PieChart/>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <DynamicDataChart/>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <StackedChartData/>
          </Item>
        </Grid>
       
        <Grid item xs={12} md={4}>
          <Item>
            <FunnelChart/>
            </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <MultiSetBar/>
           
          </Item>
        </Grid>
        <Grid item xs={12} md={8}>
          <Item>
            <StackedLine/>
           
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            
            <LineChart/>
           
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
