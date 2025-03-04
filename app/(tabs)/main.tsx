import { CalenderTemplate } from "@/components/template/main/CalenderTemplate";
import { MoneyLog } from "@/components/template/main/MoneyLogs";
import { TotalMoneyHeader } from "@/components/template/main/TotalMoneyHeader";
import { View, Text, StyleSheet } from "react-native";

export default function Tab() {
  return (
    <View style={styles.container}>
      <TotalMoneyHeader />
      <CalenderTemplate />
      <MoneyLog />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#cce8fd",
  },
});
