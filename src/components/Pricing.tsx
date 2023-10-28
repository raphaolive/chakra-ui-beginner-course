import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Stack,
  StackProps,
  Text,
} from "@chakra-ui/react";
import { CheckIcon } from "../icons/icon";

export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;

  return (
    <HStack as="li" spacing="20px" {...rest} alignItems="start">
      <Icon as={CheckIcon} h="22px" w="22" />
      <Text textAlign={["left", "left", "center"]}>{children}</Text>
    </HStack>
  );
};

export const Pricing = () => {
  return (
    <Box mx={6}>
      <Box
        maxW="994px"
        margin="auto"
        borderRadius="xl"
        mt="-64"
        overflow="hidden"
        boxShadow="xl"
      >
        <Flex direction={["column", "column", "row"]}>
          <Box p="12" bg={"purple.50"}>
            <Text fontSize="2xl" fontWeight="extrabold" color="gray.900">
              Premium PRO
            </Text>
            <Heading
              as="h3"
              fontWeight="extrabold"
              fontSize={["5xl", "5xl", "6xl"]}
              color="gray.900"
              mt="4"
            >
              $329
            </Heading>
            <Text fontSize="lg" fontWeight="medium" mt="2">
              billed just once
            </Text>
            <Button
              borderRadius="lg"
              w={["200px", "250px", "275px", "282px"]}
              height="51px"
              color="gray.50"
              colorScheme="purple"
              mt="6"
            >
              Get Started
            </Button>
          </Box>
          <Box p="60px" fontSize="lg" bg="white">
            <Text textAlign="left">
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as="ul" spacing="20px" pt="24px">
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Additional phone numbers</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
