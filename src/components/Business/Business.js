import React from 'react';
import './Business.css';
import { Box, Card, CardBody, Image, Text, Heading, Flex } from '@chakra-ui/react';
import FoodImage from "../../images/anh-nguyen-kcA-c3f_3FE-unsplash.jpg";

const Business = () => {
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
                <Heading size='md' mt={5}>{business.name}</Heading>
                <Flex mt={5}>
                    <Flex direction='column' mr={5}>
                        <Text>{business.address}</Text>
                        <Text>{business.city}</Text>
                        <Text>{business.state}</Text>
                    </Flex>
                    <Flex direction='column'>
                        <Text color='goldenrod'>{business.category.toUpperCase()}</Text>
                        <Text color='goldenrod'>{business.rating} Stars</Text>
                        <Text>{business.reviewCount} Reviews</Text>
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    </Box>
  )
}

export default Business;