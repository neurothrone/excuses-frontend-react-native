import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { Excuse } from "../models/excuse";

const ExcuseItem = ({excuse, onPress}: { excuse: Excuse; onPress: () => void }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Text
      style={styles.itemText}
      numberOfLines={1}
    >
      {excuse.text}
    </Text>
    <Icon
      style={styles.itemIcon}
      name="chevron-right"
      size={24}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  itemText: {
    fontSize: 20,
    maxWidth: "90%",
    // color: "white",
  },
  itemIcon: {
    color: "grey",
  }
});

export default ExcuseItem;
