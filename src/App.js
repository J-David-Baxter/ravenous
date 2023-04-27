import React, {useState} from "react";
import { Box } from '@chakra-ui/react';
import BusinessList from './components/BusinessList/BusinessList';
import Searchbar from './components/Searchbar/Searchbar';
import Header from './components/Header/Header';

function App() {
  const [businesses, setBusinesses] = useState([]);
  
  
  return (
    <Box>
      <Header />
      <Searchbar setBusinesses={setBusinesses}/>
      <BusinessList businessList={businesses} />
    </Box>
  );
}

export default App;
