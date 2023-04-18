import { Button, ButtonGroup, Divider, Flex, Input, Stack } from '@chakra-ui/react';
import React from 'react';

const Searchbar = () => {
  return (
    <Stack align='center' gap={10}>
        <ButtonGroup variant='ghost' borderBottom='2px solid black' w={400}>
            <Button>Best Match</Button>
            <Button>Highest Rated</Button>
            <Button>Most Reviewed</Button>
        </ButtonGroup>
        <Flex w='lg' gap={10}>
            <Input placeholder='Search Businesses'/>
            <Input placeholder='Location'/>
        </Flex>
        <Button bg='goldenrod' color='white'>Search</Button>
        <Divider />
    </Stack>
  )
}

export default Searchbar;