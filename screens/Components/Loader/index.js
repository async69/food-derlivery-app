import React, { useEffect, useState } from 'react';
import { Button, Overlay } from 'react-native-elements';
import { View, Text } from "react-native"

const Loader = ({ visible: visibleValue }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(visibleValue)
  }, [visibleValue])

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <Button title="Open Overlay" onPress={toggleOverlay} />

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text>Hello from Overlay!</Text>
      </Overlay>
    </View>
  );
};

export default Loader