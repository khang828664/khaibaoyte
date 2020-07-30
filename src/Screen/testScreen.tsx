import React from "react";
import { View, Button } from "react-native";
 
import { showMessage, hideMessage } from "react-native-flash-message";
 
class TestScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button
          onPress={() => {
            /* HERE WE GONE SHOW OUR FIRST MESSAGE */
            showMessage({
              message: "Simple message",
              type: "info",
            });
          }}
          title="Request Details"
          color="#841584"
        />
      </View>
    );
  }
}
export default(TestScreen)