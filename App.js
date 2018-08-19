import { Navigation } from "react-native-navigation";

import HomeScreen from "./src/home";
import ProfileScreen from "./src/profile";
import PostsComponent from "./src/posts";
import SidedrawerComponent from "./src/sidedrawer";
import ContactsComponent from "./src/contacs";

Navigation.registerComponent("routing3.HomeScreen", () => HomeScreen);
Navigation.registerComponent("routing3.ProfileScreen", () => ProfileScreen);
Navigation.registerComponent("routing3.PostsScreen", () => PostsComponent);
Navigation.registerComponent(
  "routing3.SiderdraweScreen",
  () => SidedrawerComponent
);
Navigation.registerComponent(
  "routing3.ContactsScreen",
  () => ContactsComponent
);

Navigation.startSingleScreenApp({
  screen: {
    screen: "routing3.HomeScreen",
    title: "Home"
  }
});
