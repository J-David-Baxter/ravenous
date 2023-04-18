import React from 'react';
import Business from '../Business/Business';
import { Flex } from '@chakra-ui/react';

const BusinessList = () => {
  const businesses = Array(10).fill(0);
  
  return (
    <Flex wrap='wrap'>
        {businesses.map((business, i) => (
            <Business key={i}/>
        ))}
    </Flex>
  )
}

export default BusinessList;