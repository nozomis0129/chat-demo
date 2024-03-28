import { useEffect } from "react";
import { useNetInfo } from "@react-native-community/netinfo";
import { Alert, LogBox } from "react-native";
LogBox.ignoreLogs([
  'You are initializing Firebase Auth for React Native without providing AsyncStorage. Auth state will default to memory persistence and will not persist between sessions. In order to persist auth state, install the package "@react-native-async-storage/async-storage" and provide it to initializeAuth:',
]);

// import the screens
import Start from "./components/Start";
import Chat from "./components/Chat";

// import react Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Create the navigator
const Stack = createNativeStackNavigator();

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  disableNetwork,
  enableNetwork,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const App = () => {
  const connectionStatus = useNetInfo();
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
  const storage = getStorage(app);

  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection lost!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => (
            <Chat
              isConnected={connectionStatus.isConnected}
              db={db}
              storage={storage}
              {...props}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
