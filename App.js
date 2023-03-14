import {View, Text, Button} from 'react-native';
import React from 'react';
import * as Keychain from 'react-native-keychain';

const App = () => {
  const keychain = async () => {
    const username = 'zuck';
    const password = 'poniesRgr8';

    // Store the credentials
    Keychain.setGenericPassword(username, password);

    try {
      // Retrieve the credentials
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        console.log(
          'Credentials successfully loaded for user ' + credentials.username,
        );
      } else {
        console.log('No credentials stored');
      }
    } catch (error) {
      console.log("Keychain couldn't be accessed!", error);
    }
    await Keychain.resetGenericPassword();
  };
  return (
    <View>
      <Button
        onPress={() => keychain()}
        title="React Native KeyChain"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Text>App</Text>
    </View>
  );
};

export default App;
