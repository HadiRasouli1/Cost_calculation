import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/Styles";

const Input = ({ label, styleInput, textInputConfig }) => {
  const inputStyles = [styles.input];
  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiLine);
  }

  return (
    <View style={[styles.inputContainer, styleInput]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig}/>
    </View>
  );
};

export default Input;
const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyles.colors.primary700,
  },
  inputMultiLine: {
    minHeight: 100,
    textAlignVertical: "top",
    // برای اینکه اینپوت مولتی لاین ئر هر دو پلتفرم به درستی دیده شود و تکست در بالا به درستی نوشته شود تکست الاین ورتیکال رو در تاپ قرار میدهیم
  },
});
