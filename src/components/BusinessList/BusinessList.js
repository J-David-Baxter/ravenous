import React from 'react';
import Business from '../Business/Business';
import { Flex } from '@chakra-ui/react';

const BusinessList = ({ businessList }) => {
  return (
    <Flex wrap='wrap'>
        {businessList.map((business, i) => (
            <Business key={i} business={business}/>
        ))}
    </Flex>
  )
}

export default BusinessList;