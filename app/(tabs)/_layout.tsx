import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import "../global.css";
export default function TabLayout() {
    return (
        <Tabs screenOptions={{headerShown:false, tabBarActiveTintColor: 'orange' }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={18} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search',
                    tabBarIcon: ({ color }) => <FontAwesome size={18} name="search" color={color} />,
                }}
            />

            <Tabs.Screen
                name="cart"
                options={{
                    title: 'Cart',
                    tabBarIcon: ({ color }) => <FontAwesome size={18} name="shopping-bag" color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => <FontAwesome size={18} name="user" color={color} />,
                }}
            />
        </Tabs>
    );
}
