import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/Styles";

const Input = ({ inValid, label, styleInput, textInputConfig }) => {
  const inputStyles = [styles.input];
  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiLine);
  }
  if (inValid) {
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.inputContainer, styleInput]}>
      <Text style={[styles.label, inValid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyles} {...textInputConfig} />
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
  },
  invalidLabel: {
    color: GlobalStyles.colors.error500,
  },
  invalidInput: {
    backgroundColor: GlobalStyles.colors.error50,
  },
});
