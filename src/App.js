import { Box } from '@chakra-ui/react';
import BusinessList from './components/BusinessList/BusinessList';
import Searchbar from './components/Searchbar/Searchbar';
import Header from './components/Header/Header';
import FoodImage from "./images/anh-nguyen-kcA-c3f_3FE-unsplash.jpg";

function App() {
  const business =  {
    image: FoodImage,
    name: "Dave's Spot",
    address: "123 Main Street",
    city: "Waterford",
    state: "CT",
    zipcode: "06385",
    category: "American",
    rating: 5,
    reviewCount: 100,
  }
  
  const businessList = Array(10).fill(business);
  
  return (
    <Box>
      <Header />
      <Searchbar />
      <BusinessList businessList={businessList}/>
    </Box>
  );
}

export default App;
