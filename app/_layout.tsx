import Login from "@/src/Screens/Login";
import { Stack } from 'expo-router';
import { useState } from "react";
import "./global.css";

export default function Layout() {
    const [authState,setAuthState] = useState<boolean>(false);
    if(authState){
        return (
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        )
    }
    return (
                <Login onAuth={setAuthState} />
    );
}
