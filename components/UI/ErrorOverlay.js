import { Button, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/Styles";

const ErrorOverlay = ({ error, onPressFunc }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{error}</Text>
      <Button title="ok" onPress={onPressFunc} color="black" />
    </View>
  );
};

export default ErrorOverlay;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    fontWeight: "bold",
  },
});
