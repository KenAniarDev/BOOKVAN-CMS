import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CompaniesTable from '../components/CompaniesTable';

export default function Companies() {
  return (
    <>
      <Grid container spacing={3}>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <CompaniesTable />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
