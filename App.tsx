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
      <Text preset="headingLarge">Criar Encomendas</Text>

      <Text preset="headingMedium">Criar Encomendas</Text>

      <Text preset="headingSmall">Criar Encomendas</Text>

      <Text italic preset="headingLarge">
        Criar Encomendas
      </Text>
      <Text italic preset="headingMedium">
        Criar Encomendas
      </Text>
      <Text italic preset="headingSmall">
        Criar Encomendas
      </Text>
    </SafeAreaView>
  );
}

export default App;
