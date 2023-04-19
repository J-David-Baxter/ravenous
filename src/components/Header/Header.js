import React from 'react';
import { Flex, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex justify='center' align='center' h={12} bg='yellow.400'>
        <Heading fontFamily='fantasy'>ravenous</Heading>
    </Flex>
  )
}

export default Header;