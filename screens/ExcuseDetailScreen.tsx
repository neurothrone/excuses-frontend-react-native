import { Button, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "ExcuseDetail">;

export default function ExcuseDetailScreen({route, navigation}: Props) {
  const {excuse} = route.params;

  // useEffect(() => {
  //   navigation.setOptions({title: "Excuse Detail"});
  // }, []);

  return (
    <View style={styles.container}>
      <Button title="Home" onPress={() => navigation.popToTop()}/>
      <Text>{excuse.id.toString()}</Text>
      <Text>{excuse.text}</Text>
      <Text>{excuse.category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
