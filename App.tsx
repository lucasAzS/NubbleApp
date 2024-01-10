import React from 'react';
import {SafeAreaView} from 'react-native';

import {Text} from './src/components/Text/Text';

function App(): React.JSX.Element {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
      }}>
      <Text preset="headingLarge">Heading Large</Text>

      <Text preset="headingMedium">Heading Medium</Text>

      <Text preset="headingSmall">Heading Small</Text>

      <Text italic preset="headingLarge">
        Heading Large Italic
      </Text>
      <Text italic preset="headingMedium">
        Heading Medium Italic
      </Text>
      <Text italic preset="headingSmall">
        Heading Small Italic
      </Text>
    </SafeAreaView>
  );
}

export default App;
