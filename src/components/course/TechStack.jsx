import React from 'react';
import { Box, Heading, HStack, Image } from '@chakra-ui/react';

const TechStack = ({ techStack }) => {
  if (!techStack || techStack.length === 0) return null;

  return (
    <Box>
      <Heading as="h2" size="lg" marginBottom={4}>TECH STACK</Heading>
      <HStack spacing={4}>
        {techStack.map((tech, index) => (
          <Box key={index} width="48px" height="48px">
            <Image src={tech.icon} alt={tech.name} objectFit="contain" />
          </Box>
        ))}
      </HStack>
    </Box>
  );
};

export default TechStack;