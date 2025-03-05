import { useEffect, useState } from "react";
import { Alert, SafeAreaView, SectionList, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../navigation/types";
import { Excuse } from "../models/excuse";
import { transformExcusesToSections } from "../utils/utils";
import ExcuseItem from "../components/ExcuseItem";

type Props = NativeStackScreenProps<RootStackParamList>;

const ItemSeparator = () => {
  return (
    <View style={styles.itemSeparator}/>
  );
};

export default function HomeScreen({navigation}: Props) {
  const [data, setData] = useState<{ title: string; data: Excuse[] }[]>([]);

  const API_URL = process.env.EXPO_PUBLIC_EXCUSES_API_URL;

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const json = await response.json();
      return json.map((item: Excuse) => ({
        id: item.id,
        text: item.text,
        category: item.category,
      }));
    } catch (error) {
      console.error(error);
      Alert.alert("Failed to fetch data");
      return [];
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const excuses: Excuse[] = await fetchData();
        const sectionListData = transformExcusesToSections(excuses);
        setData(sectionListData);
      } catch (err: any) {
        Alert.alert(err.message);
      }
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        style={styles.sectionList}
        sections={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <ExcuseItem
            excuse={item}
            onPress={() => navigation.navigate("ExcuseDetail", {excuse: item})}
          />
        )}
        ItemSeparatorComponent={() => <ItemSeparator/>}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.sectionTitle}>{title.charAt(0).toUpperCase() + title.slice(1)}</Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "black",
  },
  sectionList: {
    // paddingHorizontal: 20,
  },
  sectionTitle: {
    backgroundColor: "black",
    color: "#FBDABB",
    fontSize: 24,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  itemSeparator: {
    backgroundColor: "black",
    height: 1,
  }
});
