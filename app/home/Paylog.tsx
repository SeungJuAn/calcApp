import { FlatList, Text, View } from "react-native";
import { Paylogs } from "../types/api.types";
import styled from "styled-components/native";
import { homeStyles } from "../styles/homeStyleSheets";
import dayjs from "dayjs";

type PayLoadPropsType = {
  payLoads: Array<Paylogs>;
  dayNums: number;
};

const Payload = ({ payLoads, dayNums }: PayLoadPropsType) => {
  const DATA = Array.from({ length: 30 }).map((_, index) => ({
    id: index.toString(),
    title: `아이템 ${index + 1}`,
  }));
  const dayData = dayjs().subtract(dayNums);

  return (
    <FlatList
      data={payLoads}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={homeStyles.item}>
          <View style={homeStyles.mainItem}>
            <Text style={homeStyles.dayText}>{item.day}</Text>
            <Text style={homeStyles.YearText}>
              {item.year}년 {item.month}월
            </Text>
          </View>
          <View
            style={{
              justifyContent: "flex-start",
              //   alignItems: "baseline",
              width: 150,
              height: 30,
              gap: 10,
            }}
          >
            <Text className="logs" style={{ fontSize: 20 }}>
              {item.logs}
            </Text>
            <View style={{ alignItems: "flex-end" }}>
              <Text className="moneylogs">{item.money}원</Text>
            </View>
          </View>
        </View>
      )}
    />
  );
};

export default Payload;
