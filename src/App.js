import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import { ThemeProvider } from "@mui/system";
import theme from './styles/theme'
import Navbar from './components/navbar';
import Banner from './components/banner';
import Slider from './components/promotions';
import Products from './components/products';
import Footer from './components/footer';
import AppDrawer from './components/drawer';
import { UIProvider } from './context/ui';
import SearchBox from './components/search';
import Cart from './components/cart';
import {Colors} from './styles/theme'




function App() {

  useEffect(() => {
    document.title = "Lalu Lounge"
  }, []);


  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: Colors.container_bg }}
      >
        <UIProvider>
          <Navbar />
          <Banner />
          <Slider />
          <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
            <Typography variant="h4" color={Colors.white}>Unsere Produkte</Typography>
          </Box>
          <Products />
          <Footer />
          <AppDrawer />
          <Cart />  
          <SearchBox />
        </UIProvider>

      </Container>
    </ThemeProvider>

  );
}

export default App;
