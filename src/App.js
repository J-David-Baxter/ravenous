import { Box, Heading } from '@chakra-ui/react';
import BusinessList from './components/BusinessList/BusinessList';
import Searchbar from './components/Searchbar/Searchbar';

function App() {
  return (
    <Box>
      <Box align='center' bg='goldenrod' h={12}>
        <Heading color='white'>ravenous</Heading>
      </Box>
      <Searchbar />
      <BusinessList />
    </Box>
  );
}

export default App;
