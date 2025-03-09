import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/FontAwesome";

import { RootStackParamList } from "./navigation/types";
import HomeScreen from "./screens/HomeScreen";
import AddExcuseScreen from "./screens/AddExcuseScreen";
import ExcuseDetailScreen from "./screens/ExcuseDetailScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({navigation}) => ({
            title: "Excuses",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("AddExcuse")}
              >
                <Icon name="plus" size={24} color="black"/>
              </TouchableOpacity>

            ),
          })}
        />
        <Stack.Screen
          name="AddExcuse"
          component={AddExcuseScreen}
          options={{title: "Add Excuse"}}
        />
        <Stack.Screen
          name="ExcuseDetail"
          component={ExcuseDetailScreen}
          options={{title: "Excuse Details"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
