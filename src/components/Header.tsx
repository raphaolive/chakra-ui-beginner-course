import { Box, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box pb="28" as="section">
      <Box
        bg="purple.600"
        color="gray.50"
        pt="90px"
        pb="198px"
        px="8"
        textAlign={["left", "left", "center"]}
      >
        <Heading fontSize={["3xl", "3lx", "5xl"]} fontWeight="extrabold">
          Simple pricing for your business
        </Heading>
        <Text fontWeight="medium" fontSize={["lg", "lg", "2xl"]} pt="4">
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
