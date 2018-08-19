import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import ImagePicker from "react-native-image-picker";

class ProfileComponent extends Component {
  state = {
    avatar: ""
  };

  addAvatar = () => {
    ImagePicker.launchCamera(
      {
        title: "Select your awesome face",
        cancelButtonTitle: "noob",
        takePhotoButtonTitle: "noooobb",
        chooseFromLibraryButtonTitle: "noob...!!!"
      },
      Response => {
        if (Response.didCancel) {
          alert("cancel op");
        } else if (Response.error) {
          alert("error bro");
        }
        this.setState({
          avatar: Response.uri
        });
      }
    );
  };
  render() {
    return (
      <View style={{ width: "100%" }}>
        <Image source={{ uri: this.state.avatar }} style={styles.avatar} />
        <Button title="Add Your Avatar" onPress={() => this.addAvatar()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    width: "100%",
    height: 400
  }
});

export default ProfileComponent;
