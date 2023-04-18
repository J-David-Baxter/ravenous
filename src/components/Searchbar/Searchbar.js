import { Button, ButtonGroup, Divider, Flex, Input, Stack } from '@chakra-ui/react';
import React from 'react';
import BackgroundImage from '../../images/chad-montano-MqT0asuoIcU-unsplash.jpg';

const Searchbar = () => {
  return (
    <Stack align='center' gap={10} backgroundImage={BackgroundImage} backgroundPosition='center'>
        <ButtonGroup color='white' w={400} colorScheme='yellow' mt={5}>
            <Button>Best Match</Button>
            <Button>Highest Rated</Button>
            <Button>Most Reviewed</Button>
        </ButtonGroup>
        <Flex w='lg' gap={10}>
            <Input bg='white' placeholder='Search Businesses'/>
            <Input bg='white' placeholder='Location'/>
        </Flex>
        <Button colorScheme='yellow'>Search</Button>
        <Divider />
    </Stack>
  )
}

export default Searchbar;