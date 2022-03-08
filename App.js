import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import { useAssets } from 'expo-asset';
import React, {useState, useEffect} from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

LogBox.ignoreLogs([
  "Setting a timer",
  "AsyncStorage has been extracted from react-native core and will be removed in a future release.",
]);

function App() {
  const [currUser, setCurrUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if(user){
        setCurrUser(user);
      }
    });
    return () => unsubscribe();
  }, []);
 
  if(loading) {
    return <Text>Loading</Text>
  }

  return (
    <View style={styles.container}>
      <Text>Hey</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Main(){
  const [assets] = useAssets(
    require("./assets/icon-square.png"),
    require("./assets/chatbg.png"),
    require("./assets/user-icon.png"),
    require("./assets/welcome-img.png")
  );
  if(!assets){
    return <Text>Loading</Text>
  }
  return <App />
}

export default Main;
