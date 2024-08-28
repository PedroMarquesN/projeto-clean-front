import React from 'react';
import { Box, Toolbar, Grid, Card, CardContent, Typography, IconButton } from '@mui/material';
import { BarChart, Settings, NotificationsActive } from '@mui/icons-material';

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          minHeight: '100vh',
          backgroundColor: '#f4f6f8',
        }}
      >
        <Toolbar />

        {/* Info Cards */}
        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                backgroundColor: '#1976d2',
                color: '#fff',
                boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardContent>
                <IconButton sx={{ color: '#fff', mb: 1 }}>
                  <BarChart fontSize="large" />
                </IconButton>
                <Typography variant="h5" component="div">
                  Estatísticas
                </Typography>
                <Typography variant="body2">
                  Veja suas estatísticas aqui.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                backgroundColor: '#388e3c',
                color: '#fff',
                boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardContent>
                <IconButton sx={{ color: '#fff', mb: 1 }}>
                  <Settings fontSize="large" />
                </IconButton>
                <Typography variant="h5" component="div">
                  Configurações
                </Typography>
                <Typography variant="body2">
                  Atualize ou ative suas configurações.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                backgroundColor: '#d32f2f',
                color: '#fff',
                boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardContent>
                <IconButton sx={{ color: '#fff', mb: 1 }}>
                  <NotificationsActive fontSize="large" />
                </IconButton>
                <Typography variant="h5" component="div">
                  Notificações
                </Typography>
                <Typography variant="body2">
                  Veja suas mensagens e informações recentes.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
