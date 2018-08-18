import { Navigation } from "react-native-navigation";

import HomeIcon from "./assets/icons/home.png";
import MenuIcon from "./assets/icons/menu.svg";

const loadTabs = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: "routing3.HomeScreen",
        label: "home",
        title: "home",
        icon: HomeIcon,
        navigatorStyle: {
          navBarTextColor: "red",
          navBarBackgroundColor: "black"
        },
        navigatorButtons: {
          leftButtons: [
            {
              title: "Drawer",
              id: "DrawerButton",
              icon: MenuIcon
            }
          ]
        }
      },
      {
        screen: "routing3.ProfileScreen",
        label: "profile",
        title: "profile",
        icon: HomeIcon
      },
      {
        screen: "routing3.PostsScreen",
        label: "posts",
        title: "posts",
        icon: HomeIcon
      }
    ],
    drawer: {
      left: {
        screen: "routing3.SiderdraweScreen",
        fixedWidth: 500
      }
    }
  });
};

export default loadTabs;
