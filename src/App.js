import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import { ThemeProvider } from "@mui/system";
import theme from './styles/theme'
import Navbar from './components/navbar';
import Banner from './components/banner';
import Slider from './components/promotions';
import Products from './components/products';




function App() {

  useEffect(() => {
    document.title = "ShoppingCart - Home"
  }, []);


  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: '#fff' }}
      >
        <Navbar />
        <Banner />
        <Slider />
        <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
          <Typography variant="h4">Unsere Produkte</Typography>
        </Box>
        <Products />
      </Container>
    </ThemeProvider>

  );
}

export default App;
