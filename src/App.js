import { Box, Container, Heading } from '@chakra-ui/react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import Searchbar from './components/Searchbar/Searchbar';

function App() {
  return (
    <Box>
      <Box align='center' bg='goldenrod' mb={5} h={12}>
        <Heading color='white'>ravenous</Heading>
      </Box>
      <Searchbar />
      <BusinessList />
    </Box>
  );
}

export default App;
