import React from 'react';
import { Box, Heading, VStack, Text, HStack } from '@chakra-ui/react';

const LearningOutcomes = ({ outcomes }) => {
  if (!outcomes || outcomes.length === 0) return null;

  return (
    <Box marginTop={8}>
      <Heading as="h2" size="lg" marginBottom={4}>⚡ What will I learn?</Heading>
      <VStack align="stretch" spacing={2}>
        {outcomes.map((outcome, index) => (
          <HStack key={index} alignItems="flex-start">
            <Text marginRight={2}>{outcome.icon}</Text>
            <Text>{outcome.text}</Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default LearningOutcomes;