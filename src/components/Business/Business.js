import React from 'react';
import { Box, Card, CardBody, Image, Text, Heading, Flex } from '@chakra-ui/react';

const Business = ({ business }) => {
  
  
  return (
    <Box maxW='sm' m={10}>
        <Card w='sm' variant='elevated' justifyContent='center'>
            <CardBody justifyContent='center'>
                <Image 
                    src={business.image_url}
                    alt='food'
                    borderRadius='lg'
                    w='sm'
                    h='sm'
                    m='0 auto'
                />
                <Heading 
                    size='lg' 
                    cursor='pointer' 
                    mt={5}
                    textAlign='center'
                    onMouseOver={(e) => e.target.style.textDecoration='underline'} 
                    onMouseLeave={(e) => e.target.style.textDecoration='none'}
                >
                {business.name}
                </Heading>
                <Flex mt={5}>
                    <Flex direction='column' mr={5}>
                        <Text>{business.location.address1}</Text>
                        <Text>{business.location.city}</Text>
                        <Text>{business.location.state}</Text>
                    </Flex>
                    <Flex direction='column'>
                        <Text color='yellow.600'>{business.categories[0].title.toUpperCase()}</Text>
                        <Text color='yellow.600'>{business.rating} Stars</Text>
                        <Text color='yellow.600'>{business.review_count} Reviews</Text>
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    </Box>
  )
}

export default Business;