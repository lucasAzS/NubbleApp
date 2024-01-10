import React from 'react';
import {SafeAreaView, View} from 'react-native';

import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View style={{paddingHorizontal: 24}}>
        <Text preset="headingLarge">Heading Large</Text>
        <Button title="Entrar" />
      </View>
    </SafeAreaView>
  );
}

export default App;
