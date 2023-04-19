import { Button, ButtonGroup, Divider, Flex, Input, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import BackgroundImage from '../../images/chad-montano-MqT0asuoIcU-unsplash.jpg';

const Searchbar = () => {
  const [buttonState, setButtonState] = useState([
    {
      text: 'Best Match',
      isActive: false,
    },
    {
      text: 'Highest Rated',
      isActive: false,
    },
    {
      text: 'Most Reviewed',
      isActive: false,
    }
  ])
  
  function toggleButtonState(index) {
    setButtonState(buttonState.map((button, i) => {
      return i === index ? {...button, isActive: !button.isActive} : {...button, isActive: false}
    }))
  }
  
  return (
    <Stack align='center' gap={10} backgroundImage={BackgroundImage} backgroundPosition='center'>
        <ButtonGroup colorScheme='teal' w={400} mt={5}>
            {buttonState.map((button, i) => (
              <Button key={i} isActive={button.isActive} onClick={() => toggleButtonState(i)}>{button.text}</Button>
            ))}
        </ButtonGroup>
        <Flex w='lg' gap={10}>
            <Input bg='white' placeholder='Search Businesses'/>
            <Input bg='white' placeholder='Location'/>
        </Flex>
        <Button colorScheme='teal'>Search</Button>
        <Divider />
    </Stack>
  )
}

export default Searchbar;