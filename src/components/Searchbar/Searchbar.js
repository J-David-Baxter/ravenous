import { Button, ButtonGroup, Divider, Flex, Input, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import BackgroundImage from '../../images/chad-montano-MqT0asuoIcU-unsplash.jpg';

const Searchbar = () => {
  const BUTTON_VALUES  = [
    {
      text: 'Best Match',
      value: 'best_match'
    },
    {
      text: 'Highest Rated',
      value: 'highest_rated'
    },
    {
      text: 'Most Reviewed',
      value: 'most_reviewed'
    }
  ];
  
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [selectedSorting, setSelectedSorting] = useState('best_match');

  function toggleSortingOption(event) {
    setSelectedSorting(event.target.value);
  }

  function handleSearchTermChange(event) {
    setSearchTerm(event.target.value);
  }


  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Searching Yelp with ${searchTerm}, ${location}, ${selectedSorting}`);
    setSearchTerm('');
    setLocation('');
  } 

  return (
    <Stack align='center' gap={10} backgroundImage={BackgroundImage} backgroundPosition='center'>
        <ButtonGroup colorScheme='twitter' w={400} mt={5}>
            {BUTTON_VALUES.map((button, i) => (
              <Button 
                key={button.value} 
                value={button.value} 
                onClick={toggleSortingOption} 
                isActive={button.value === selectedSorting}>
              {button.text}
              </Button>
            ))}
        </ButtonGroup>
        <Flex w='lg' gap={10}>
            <Input bg='white' placeholder='Search Businesses' value={searchTerm} onChange={handleSearchTermChange} />
            <Input bg='white' placeholder='Location' value={location} onChange={handleLocationChange} />
        </Flex>
        <Button colorScheme='twitter' onClick={handleSubmit}>Search</Button>
        <Divider />
    </Stack>
  )
}

export default Searchbar;