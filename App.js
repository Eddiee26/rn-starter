import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import MyFirstComponent from "./src/screens/MyFirstComponent";
import ListScreen from "./src/screens/ListScreen";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Componets: MyFirstComponent,
    ListComponet: ListScreen

  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Learning App React",
    },
  
  }
);

export default createAppContainer(navigator);
