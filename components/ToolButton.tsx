import { Feather } from "@expo/vector-icons";
import { Button, Center, HStack, Icon, Text } from "native-base";

interface ToolButtonProps {
  disabled: boolean;
  isLoading: boolean;
  isLoadingText: string;
  icon: string;
  title: string;
  onPress?: () => void;
}

const ToolButton = (props: ToolButtonProps) => {
  return (
    <Button
      disabled={props.disabled}
      isLoading={props.isLoading}
      isLoadingText={props.isLoadingText}
      rounded="full"
      colorScheme="gray"
      variant="default"
      onPress={props.onPress}
    >
      <HStack space={1} flex={1} alignSelf="center">
        <Center>
          <Icon as={Feather} name={props.icon} />
        </Center>
        <Text fontSize="md" noOfLines={1}>
          {props.title}
        </Text>
      </HStack>
    </Button>
  );
};

export default ToolButton;
