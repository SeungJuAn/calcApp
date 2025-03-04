import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  dayText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "grey",
  },
  item: {
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 10,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  dayView: {
    display: "flex",
    flexDirection: "row",
    // width: "30%",
    justifyContent: "flex-start",
  },
  YearText: {
    fontSize: 10,
    fontWeight: "bold",
  },
  dayTextsub: {
    textAlign: "right",
  },
  mainItem: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    gap: "10",
  },
  ".moneylogs": {
    fontSize: 10,
  },
});
