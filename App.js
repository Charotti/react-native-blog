import { SafeAreaView } from "react-native";
import { NativeRouter, Routes, Route } from "react-router-native";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";

export default function App() {
  return (
    <SafeAreaView>
      <NativeRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </NativeRouter>
    </SafeAreaView>
  );
}
