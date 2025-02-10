import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

export default function Header() {
  return (
    <HeaderStyle>
      <SafeAreaView>
        <SlideMonthArea>
          <TouchableOpacity>
            <Ionicons name="chevron-back" size={15} color="black" />
          </TouchableOpacity>
          <Text>2025.02</Text>
          <TouchableOpacity>
            <Ionicons name="chevron-forward" size={15} color="black" />
          </TouchableOpacity>
        </SlideMonthArea>
      </SafeAreaView>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.View`
  height: 12%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #eedded;
`;

const SlideMonthArea = styled.View`
  display: flex;
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
`;
