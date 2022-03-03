import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigate } from "react-router-native";

export default function Login() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (Login.length > 10) {
      navigate("/home");
      console.log("Submit");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.subContainer}>
        <TextInput style={styles.input} placeholder="Login" />
        <TouchableOpacity onPress={() => handleSubmit()}>
          <Text>Button</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { backgroundColor: "#fff", marginTop: 100 },
  subContainer: { alignItems: "center", justifyContent: "center" },
  input: {
    width: 250,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 5,
    marginTop: 100,
  },
  title: { fontWeight: "bold", fontSize: 30, textAlign: "center" },
});
