import { Box, HStack, Icon, Stack, StackProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { MoneyBackGuaranteeIcon } from "../icons/icon";
import { NooSetupFees } from "../icons/icon";
import { NoMonthlySub } from "../icons/icon";

interface FeatureProps extends StackProps {
  icon: ElementType;
}

const Feature = (props: FeatureProps) => {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing="6">
      <Icon as={icon} boxSize="12" />
      <Text textAlign={"left"} fontSize={["md", "md", "lg"]} fontWeight="bold">
        {children}
      </Text>
    </HStack>
  );
};

export const Features = () => {
  return (
    <Box maxW="1024px" m="auto" pt="60px" pb="8">
      <Stack px="12" spacing="5" direction={["column", "column", "row"]}>
        <Feature icon={MoneyBackGuaranteeIcon}>
          30 days money back Guarantee
        </Feature>
        <Feature icon={NooSetupFees}>No setup fees 100% hassle-free</Feature>
        <Feature icon={NoMonthlySub}>
          No monthly subscription Pay once and for all
        </Feature>
      </Stack>
    </Box>
  );
};
