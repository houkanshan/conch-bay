import { StyleProp, ViewStyle } from "react-native";
import Icon from "./Icon";
import Pressable from "./Pressable";
import { Center } from "./Stack";
import { Color } from "./Styles";

interface IconButtonProps {
  isDisabled?: boolean;
  size: number;
  color?: string;
  icon: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const IconButton = (props: IconButtonProps) => {
  return (
    <Pressable
      isDisabled={props.isDisabled}
      style={[
        {
          width: props.size,
          height: props.size,
          borderRadius: props.size / 2,
        },
        !!props.color && { backgroundColor: props.color },
        props.style,
      ]}
      onPress={props.onPress}
    >
      <Center flex>
        <Icon
          name={props.icon as any}
          size={props.size * 0.5}
          color={props.color ? "white" : Color.MiddleTerritory}
        />
      </Center>
    </Pressable>
  );
};

export default IconButton;