import { Text, View, StyleSheet } from "react-native";

export function Test() {
  return (
    <View style={styles.container}>
      <Text>ciao</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: "#cccccc",
  },
});
