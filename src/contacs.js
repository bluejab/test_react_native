import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Contacts from "react-native-contacts";

class ContactsComponent extends Component {
  state = {
    myContacts: []
  };
  getContacts = () => {
    Contacts.getAll((err, contacts) => {
      if (err === "denied") {
        alert(err);
      } else {
        this.setState({
          myContacts: contacts
        });
      }
    });
  };

  addContacts = () => {
    const newContact = {
      emailAdresses: [
        {
          label: "Work",
          email: "edytanto@gmail.com"
        }
      ],
      familyName: "tanto",
      givenName: "edy "
    };

    Contacts.addContact(newContact, err => {
      if (err) {
        alert(err);
      } else {
        this.getContacts();
      }
    });
  };

  openContactForm = () => {
    const newContact = {
      familyName: "phan",
      givenName: "irwan"
    };

    Contacts.openContactForm(newContact, err => {
      if (err) {
        alert(err);
      }
    });
  };

  searchForContact = () => {
    Contacts.getContactsMatchingString("Edy Tanto", (err, contacts) => {
      if (err === "denied") {
        alert(err);
      } else {
        this.setState({
          myContacts: contacts
        });
      }
    });
  };

  render() {
    return (
      <View style={{ width: "100%" }}>
        {this.state.myContacts.map((contact, i) => (
          <Text key={i}>
            {contact.givenName} {contact.familyName}
          </Text>
        ))}
        <Button title="Load Contacts" onPress={this.getContacts} />
        <Button title="Add Contacts" onPress={this.addContacts} />
        <Button title="Open Contact Form" onPress={this.openContactForm} />
        <Button title="Search" onPress={this.searchForContact} />
      </View>
    );
  }
}

export default ContactsComponent;
