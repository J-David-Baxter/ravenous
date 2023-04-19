import { Box } from '@chakra-ui/react';
import BusinessList from './components/BusinessList/BusinessList';
import Searchbar from './components/Searchbar/Searchbar';
import Header from './components/Header/Header';

function App() {
  return (
    <Box>
      <Header />
      <Searchbar />
      <BusinessList />
    </Box>
  );
}

export default App;
