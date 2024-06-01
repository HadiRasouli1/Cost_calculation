import { ActivityIndicator, StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/Styles";
import Button from "./Button";

const LoadingOverlay = ({closeLoaded}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="white" />
      <Button onPressFunc={closeLoaded}>dont loaded</Button>
    </View>
  );
};

export default LoadingOverlay;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
    gap:10
  },
});
