import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  h4: {
    fontWeight: "bold",
    padding: 10,
    color: colors.primary,
  },
  divider: {
    color: colors.primary,
    marginBottom: 5,
  },

  header: {
    color: colors.primary,
  },
  priceContainer: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  location: {
    color: colors.primary,
    fontSize: 11,
  },
  scrollView: {
    // marginBottom: 50,
  },
  title: {
    fontSize: 9,
    paddingBottom: 5,
    textTransform: "capitalize",
    color: colors.primary,
  },
  subtitle: {
    fontSize: 13,
  },
});
