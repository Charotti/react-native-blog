import { StyleSheet, View, Text, SafeAreaView, TextInput } from "react-native";

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.subContainer}>
        <TextInput style={styles.input} placeholder="Login" />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  subContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
  input: {
    width: 250,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 5,
  },
  title: { fontWeight: "bold", fontSize: 30, textAlign: "center" },
});
