import { Button, CssBaseline, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChangePassword from './auth/ChangePassword';
import { AppBar, Box, Toolbar, Card } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    console.log("Logout Clicked");
    navigate('/login')
  }
  return <>
    <CssBaseline />
    <Grid container>
      <Grid item lg={12} sm={12} xs={12}>
        <Card sx={{ width: '100%', height: '100%' }}>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="secondary">
              <Toolbar>
                <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>MockBot</Typography>
                <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Start Interview</Button>
                <Button component={NavLink} to='/login' style={({ isActive }) => { return { backgroundColor: isActive ? '#6d1b7b' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Logout</Button>
              </Toolbar>
            </AppBar>
          </Box>
        </Card>
      </Grid>
      <Grid item lg={12} sm={12} xs={12}>
        <div>
          <div className='center'>
          <h1>Nothing To Show</h1>
          </div>
          <div align="center">
          <p1 textalign='center'>Please start an interview and then <br/>  the dashboard will be shown here.</p1>
          </div>
        </div>
      </Grid>
    </Grid>
  </>;
};

export default Dashboard;
// import { Button, CssBaseline, Grid, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import ChangePassword from './auth/ChangePassword';
// import { useDispatch } from 'react-redux';
// import { useEffect, useState } from 'react';

//   const Dashboard = () => {
//   const navigate = useNavigate()
//   const handleLogout = () => {
//     navigate ('/login')

//   }
  
//   return <>
//     <CssBaseline />
//     <Grid container>
//       <Grid item sm={4} sx={{ backgroundColor: 'gray', p: 5, color: 'white' }}>
//         <h1>Dashboard</h1>
//         <Typography variant='h5'>Email:</Typography>
//         <Typography variant='h6'>Name: </Typography>
//         <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{ mt: 8 }}>Logout</Button>
//       </Grid>
//       <Grid item sm={8}>
//         <ChangePassword />
//       </Grid>
//     </Grid>
//   </>;
// };

// export default Dashboard;
