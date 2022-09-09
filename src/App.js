import { Container} from '@mui/material';
import { useEffect } from 'react';
import { ThemeProvider } from "@mui/system";
import theme from './styles/theme'
import Navbar from './components/navbar';
import Banner from './components/banner';
import Slider from './components/promotions';
import { Product } from './styles/products';



function App() {

  useEffect(() => {
    document.title = "ShoppingCart - Home"
  },[]);


  return (
    <ThemeProvider theme ={theme}>
          <Container maxWidth="xl" sx={{ background: '#fff'}}
    >
      <Navbar />
      <Banner/>
      <Slider />
      <Product />
    </Container>
    </ThemeProvider>

  );
}

export default App;
