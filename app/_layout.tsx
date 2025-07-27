import { Stack } from 'expo-router';
import "./global.css"
import Login from "@/src/Screens/Login";
export default function Layout() {
  return (
      <Login />
  );
}

function Layoutttt() {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    );
}
