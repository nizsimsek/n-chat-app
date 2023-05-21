import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 20,
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    gap: 20,
  },
  descriptionContainer: {
    flexDirection: "column",
    gap: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
    gap: 10,
  },
  buttonContainer: {
    gap: 10,
  },
});
