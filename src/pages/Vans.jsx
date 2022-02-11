import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from '../components/Chart';
import Deposits from '../components/Deposits';
import VanTables from '../components/VanTables';

export default function Vans() {
  return (
    <>
      <Grid container spacing={3}>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <VanTables />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
