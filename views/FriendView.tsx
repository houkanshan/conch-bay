import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { useState } from "react";
import { Dimensions, StyleProp, ViewStyle } from "react-native";
import {
  Avatar,
  AvatarButton,
  Badge,
  Color,
  HStack,
  Marquee,
  Modal,
  Text,
  TextStyles,
  VStack,
  ViewStyles,
  useTheme,
} from "../components";
import t from "../i18n";
import { Friend, FriendListResult, FriendOnlineState } from "../models/types";
import { getCoopRuleColor, getUserIconCacheSource, getVsModeColor } from "../utils/ui";

interface FriendViewProps {
  friends?: FriendListResult;
  style?: StyleProp<ViewStyle>;
}

const FriendView = (props: FriendViewProps) => {
  const placeholder = Math.ceil((Dimensions.get("window").width - 32) / 56);

  const theme = useTheme();

  const [friend, setFriend] = useState<Friend>();
  const [displayFriend, setDisplayFriend] = useState(false);

  const getFriendColor = (friend: Friend) => {
    switch (friend.onlineState) {
      case FriendOnlineState.VS_MODE_FIGHTING:
        return getVsModeColor(friend.vsMode!);
      case FriendOnlineState.COOP_MODE_FIGHTING:
        return getCoopRuleColor(friend.coopRule!);
      case FriendOnlineState.MINI_GAME_PLAYING:
        return Color.TableturfBattle;
      case FriendOnlineState.VS_MODE_MATCHING:
      case FriendOnlineState.COOP_MODE_MATCHING:
      case FriendOnlineState.ONLINE:
        return undefined;
      case FriendOnlineState.OFFLINE:
        return "transparent";
    }
  };
  const getFriendOutline = (friend: Friend) => {
    switch (friend.onlineState) {
      case FriendOnlineState.VS_MODE_MATCHING:
        return getVsModeColor(friend.vsMode!);
      case FriendOnlineState.COOP_MODE_MATCHING:
        return getCoopRuleColor(friend.coopRule!);
      case FriendOnlineState.ONLINE:
        return Color.Online;
      case FriendOnlineState.VS_MODE_FIGHTING:
      case FriendOnlineState.COOP_MODE_FIGHTING:
      case FriendOnlineState.MINI_GAME_PLAYING:
      case FriendOnlineState.OFFLINE:
        return "transparent";
    }
  };
  const getFriendOnlineStatusColor = (friend: Friend) => {
    switch (friend.onlineState) {
      case FriendOnlineState.VS_MODE_FIGHTING:
        return getVsModeColor(friend.vsMode!);
      case FriendOnlineState.COOP_MODE_FIGHTING:
        return getCoopRuleColor(friend.coopRule!);
      case FriendOnlineState.MINI_GAME_PLAYING:
        return Color.TableturfBattle;
      case FriendOnlineState.VS_MODE_MATCHING:
      case FriendOnlineState.COOP_MODE_MATCHING:
      case FriendOnlineState.ONLINE:
        return Color.Online;
      case FriendOnlineState.OFFLINE:
        return Color.MiddleTerritory;
    }
  };
  const formatFriendOnlineStatus = (friend: Friend) => {
    switch (friend.onlineState) {
      case FriendOnlineState.VS_MODE_FIGHTING:
        return "playing";
      case FriendOnlineState.COOP_MODE_FIGHTING:
        return "working";
      case FriendOnlineState.VS_MODE_MATCHING:
      case FriendOnlineState.COOP_MODE_MATCHING:
      case FriendOnlineState.MINI_GAME_PLAYING:
      case FriendOnlineState.ONLINE:
        return "online";
      case FriendOnlineState.OFFLINE:
        return "offline";
    }
  };

  const onDisplayFriendClose = () => {
    setDisplayFriend(false);
  };

  const renderItem = (friend: ListRenderItemInfo<Friend>) => {
    return (
      <AvatarButton
        size={48}
        image={getUserIconCacheSource(friend.item.userIcon.url)}
        recyclingKey={friend.item.id}
        badge={{
          color: getFriendColor(friend.item) ?? friend.extraData,
          outline: getFriendOutline(friend.item),
        }}
        style={
          friend.index !== props.friends!.friends.nodes.length - 1 ? ViewStyles.mr2 : undefined
        }
        onPress={() => {
          setFriend(friend.item);
          setDisplayFriend(true);
        }}
      />
    );
  };

  return (
    <VStack style={[ViewStyles.wf, props.style]}>
      <FlashList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={props.friends?.friends.nodes ?? undefined}
        keyExtractor={(friend) => {
          return friend.id;
        }}
        renderItem={renderItem}
        extraData={theme.territoryColor}
        estimatedItemSize={48}
        ListEmptyComponent={
          <HStack flex>
            {new Array(props.friends === undefined ? placeholder : 0).fill(0).map((_, i) => (
              <Avatar
                key={i}
                size={48}
                style={[
                  i !== placeholder - 1 ? ViewStyles.mr2 : undefined,
                  theme.territoryStyle,
                  ViewStyles.disabled,
                ]}
              />
            ))}
          </HStack>
        }
        contentContainerStyle={ViewStyles.px4}
      />
      <Modal isVisible={displayFriend} onClose={onDisplayFriendClose} style={ViewStyles.modal1d}>
        {friend && (
          <VStack center>
            <Avatar
              size={64}
              image={getUserIconCacheSource(friend.userIcon.url)}
              style={ViewStyles.mb2}
            />
            <Marquee style={[ViewStyles.mb2, TextStyles.h2]}>
              {friend.playerName ?? friend.nickname}
              <Text style={TextStyles.subtle}>
                {friend.playerName !== null && friend.nickname !== friend.playerName
                  ? ` (${friend.nickname})`
                  : ""}
              </Text>
            </Marquee>
            <HStack center>
              <Badge
                color={getFriendOnlineStatusColor(friend)!}
                title={t(formatFriendOnlineStatus(friend)!)}
                style={friend.vsMode || friend.coopRule ? ViewStyles.mr1 : undefined}
              />
              {friend.vsMode && (
                <Badge color={getVsModeColor(friend.vsMode)!} title={t(friend.vsMode.id)} />
              )}
              {friend.coopRule && (
                <Badge color={getCoopRuleColor(friend.coopRule)!} title={t(friend.coopRule)} />
              )}
              {friend.onlineState === FriendOnlineState.MINI_GAME_PLAYING && (
                <Badge color={Color.TableturfBattle} title={t("tableturf_battle")} />
              )}
            </HStack>
          </VStack>
        )}
      </Modal>
    </VStack>
  );
};

export default FriendView;
