import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import LoadTabs from "./tabs";

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.navigatorEvent);
  }

  navigatorEvent = event => {
    if (event.type === "NavBarButtonPress" && event.id === "DrawerButton") {
      this.props.navigator.toggleDrawer({
        side: "left",
        animated: true
      });
    }
  };

  render() {
    return (
      <View>
        <Text>This is home</Text>
        <Button
          title="Go To Profile"
          onPress={() => {
            LoadTabs();
          }}
        />
      </View>
    );
  }
}

export default HomeComponent;
