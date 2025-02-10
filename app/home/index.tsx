import { useState } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import Payload from "./Paylog";
import { Paylogs } from "../types/api.types";

export default function HomeScreen() {
  const [totalMoney, setTotalMoney] = useState<number>(0);
  const [usefulMoney, setUsefulMoney] = useState<number>(0);
  const testPaylogs: Paylogs[] = [
    {
      id: "1",
      day: "01",
      year: "2025",
      month: "01",
      logs: "1월 전기세",
      money: 100000,
      type: "0102",
    },
    {
      id: "2",
      day: "02",
      year: "2025",
      month: "01",
      logs: "1월 도시가스비용",
      money: 100000,
      type: "0102",
    },
  ];
  return (
    <Wrap>
      <StyledView>
        <MoneyBlock>
          <Text>목표금액</Text>
          <MoneyText>{totalMoney}원</MoneyText>
        </MoneyBlock>
        <MoneyBlock>
          <Text>현재금액</Text>
          <MoneyText>{totalMoney}원</MoneyText>
        </MoneyBlock>
      </StyledView>
      <Horizon />
      <Payload payLoads={testPaylogs} />
    </Wrap>
  );
}

// ✅ `ListView` → `View`로 변경
const Wrap = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
`;
const MoneyText = styled.Text`
  font-size: 20px;
`;

const StyledView = styled.View`
  display: flex;
  padding: 20px;
  gap: 10px;
  width: 100%;
  /* height: 0%; */
`;

const MoneyBlock = styled.View`
  width: 85%;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  /* height: 5%; */
`;

// ✅ `Horizion` → `Horizon` (오타 수정)
// ✅ `height: 1px;` 으로 변경하여 가로줄 표시 가능하도록 수정
const Horizon = styled.View`
  height: 1px;
  width: 100%;
  background-color: #ccc;
  margin-top: 10px;
`;
