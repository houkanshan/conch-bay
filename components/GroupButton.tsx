import { StyleProp, ViewStyle } from "react-native";
import Marquee from "./Marquee";
import Pressable from "./Pressable";
import { HStack } from "./Stack";
import { TextStyles, ViewStyles } from "./Styles";
import Text from "./Text";

interface GroupButtonProps {
  color?: string;
  isFirst?: boolean;
  isLast?: boolean;
  title: string;
  subtitle: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const GroupButton = (props: GroupButtonProps) => {
  return (
    <Pressable
      style={[
        ViewStyles.px3,
        { height: 64 },
        props.isFirst && ViewStyles.rt2,
        props.isLast && ViewStyles.rb2,
        props.style,
      ]}
      onPress={props.onPress}
    >
      <HStack
        flex
        center
        style={[
          ViewStyles.py1,
          !props.isFirst && ViewStyles.sept,
          !props.isLast && ViewStyles.sepb,
        ]}
      >
        <HStack style={ViewStyles.i}>
          <Marquee style={[TextStyles.h2, !!props.color && { color: props.color }]}>
            {props.title}
          </Marquee>
        </HStack>
        <HStack center>
          <Text>{props.subtitle}</Text>
        </HStack>
      </HStack>
    </Pressable>
  );
};

export default GroupButton;