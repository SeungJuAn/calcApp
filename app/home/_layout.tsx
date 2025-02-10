import { Slot } from "expo-router";
import Header from "./Header";

export default function HomeLayout() {
  return (
    <>
      <Header />
      <Slot />
      {/* <Footer /> */}
    </>
  );
}
