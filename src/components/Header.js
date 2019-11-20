import React from 'react';
import { Alert } from 'react-native';
import { Appbar } from 'react-native-paper';

function Header() {
  const MyAlert = () => {
    Alert.alert(
      'About me',
      'Hi!',
      [
        {
          text: 'Accept',
          onPress: () => null,
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <Appbar.Header>
      <Appbar.Content title="myToDo" subtitle="by AtilaDev" />
      <Appbar.Action icon="account-card-details" onPress={MyAlert} />
    </Appbar.Header>
  );
}

export default Header;
