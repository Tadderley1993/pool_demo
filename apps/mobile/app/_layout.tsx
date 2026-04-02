import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { RoleProvider } from "../src/context/RoleContext";

export default function RootLayout() {
  return (
    <RoleProvider>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(customer)" />
      </Stack>
    </RoleProvider>
  );
}
