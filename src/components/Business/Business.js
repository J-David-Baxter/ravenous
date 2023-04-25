import React from 'react';
import { Box, Card, CardBody, Image, Text, Heading, Flex } from '@chakra-ui/react';

const Business = ({ business }) => {
  
  
  return (
    <Box maxW='sm' m={10}>
        <Card w={275} variant='elevated'>
            <CardBody>
                <Image 
                    src={business.image}
                    alt='food'
                    borderRadius='lg'
                    w={200}
                    h={200}
                />
                <Heading 
                    size='md' 
                    cursor='pointer' 
                    mt={5} 
                    onMouseOver={(e) => e.target.style.textDecoration='underline'} 
                    onMouseLeave={(e) => e.target.style.textDecoration='none'}
                >
                {business.name}
                </Heading>
                <Flex mt={5}>
                    <Flex direction='column' mr={5}>
                        <Text>{business.address}</Text>
                        <Text>{business.city}</Text>
                        <Text>{business.state}</Text>
                    </Flex>
                    <Flex direction='column'>
                        <Text color='yellow.600'>{business.category.toUpperCase()}</Text>
                        <Text color='yellow.600'>{business.rating} Stars</Text>
                        <Text color='yellow.600'>{business.reviewCount} Reviews</Text>
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    </Box>
  )
}

export default Business;