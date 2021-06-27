import React from "react";
import { Box, Text, Badge } from "@chakra-ui/react";

const ProductsWash = () => {
  return (
    <Box
      bg="gray.300"
      mt={8}
      p={4}
      align="center"
      borderWidth="1px"
      borderRadius="lg"
    >
      <Text>Please enter an estimated weight (Lbs)</Text>
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="red">
            Note:
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            <Text>
              The cleaner will weigh your laundry and update your bill upon
              pickup. Additional charges may incur based on size, material, and
              weight.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductsWash;
