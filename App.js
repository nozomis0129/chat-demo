import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// import the screens
import Start from "./components/Start";
import Chat from "./components/Chat";

// import react Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Create the navigator
const Stack = createNativeStackNavigator();

// import Firestore
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const App = () => {
  // Web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCLYt-t4l2Ek9KDrhgjObvQRu5sLMjK4cw",
    authDomain: "chatapp-6a9b4.firebaseapp.com",
    projectId: "chatapp-6a9b4",
    storageBucket: "chatapp-6a9b4.appspot.com",
    messagingSenderId: "144872389641",
    appId: "1:144872389641:web:79e0cd2e2f960080da8cd8",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />

        <Stack.Screen name="Chat">
          {(props) => <Chat db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
