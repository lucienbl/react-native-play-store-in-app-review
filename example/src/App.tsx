import * as React from 'react';
import { StyleSheet, View, Button, Platform } from 'react-native';
import PlayStoreInAppReview from 'react-native-play-store-in-app-review';

export default function App() {
  const startPlayStoreReview = async () => {
    await PlayStoreInAppReview.startInAppReview();
  };

  return (
    <View style={styles.container}>
      {Platform.OS === 'android' && (
        <Button title="Review App" onPress={startPlayStoreReview} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
