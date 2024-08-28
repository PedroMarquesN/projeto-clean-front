import React from 'react';
import { Box, Typography, Container, IconButton, Link, Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: 'auto',
        backgroundColor: 'primary.main',
        color: '#fff',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Informações da empresa */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Action Enterprise
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Uma empresa líder em soluções inovadoras, focada em proporcionar
              a melhor experiência para nossos clientes.
            </Typography>
          </Grid>

          {/* Links úteis */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Links úteis
            </Typography>
            <Box>
              <Link href="/" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
                Home
              </Link>
              <Link href="/about" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
                Sobre nós
              </Link>
              <Link href="/contact" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
                Contato
              </Link>
              <Link href="/privacy" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
                Política de Privacidade
              </Link>
            </Box>
          </Grid>

          {/* Redes sociais */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Siga-nos
            </Typography>
            <Box>
              <IconButton aria-label="Instagram" color="inherit" href="https://instagram.com">
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="Facebook" color="inherit" href="https://facebook.com">
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="LinkedIn" color="inherit" href="https://linkedin.com">
                <LinkedInIcon />
              </IconButton>
              <IconButton aria-label="Twitter" color="inherit" href="https://twitter.com">
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            &copy; {new Date().getFullYear()} Action Enterprise. Todos os direitos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
