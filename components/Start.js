import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const Start = ({ navigation }) => {
  const [name, setName] = useState("");
  const image = require("../assets/background-image.png");
  const icon = require("../assets/icon.png");

  const [selectedColor, setSelectedColor] = useState("");

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>Chat App</Text>
        <View style={styles.whiteContainer}>
          <View style={styles.inputContainer}>
            <Image source={icon} style={styles.icon} />
            <TextInput
              style={styles.textInput}
              value={name}
              onChangeText={setName}
              placeholder="Your Name"
              placeholderTextColor="#757083"
            />
          </View>
          <Text style={styles.fontColor}>Chooes Background Color.</Text>
          <View style={styles.colorButtonsContainer}>
            <TouchableOpacity
              style={[
                styles.colorButton,
                {
                  backgroundColor: "#090C08",
                  opacity: selectedColor === "#090C08" ? 1 : 0.7,
                },
              ]}
              onPress={() => handleColorSelection("#090C08")}
            />
            <TouchableOpacity
              style={[
                styles.colorButton,
                {
                  backgroundColor: "#474056",
                  opacity: selectedColor === "#474056" ? 1 : 0.7,
                },
              ]}
              onPress={() => handleColorSelection("#474056")}
            />
            <TouchableOpacity
              style={[
                styles.colorButton,
                {
                  backgroundColor: "#8A95A5",
                  opacity: selectedColor === "#8A95A5" ? 1 : 0.7,
                },
              ]}
              onPress={() => handleColorSelection("#8A95A5")}
            />
            <TouchableOpacity
              style={[
                styles.colorButton,
                {
                  backgroundColor: "#B9C6AE",
                  opacity: selectedColor === "#B9C6AE" ? 1 : 0.7,
                },
              ]}
              onPress={() => handleColorSelection("#B9C6AE")}
            />
          </View>
          <Button
            title="Start Chatting"
            onPress={() =>
              navigation.navigate("Chat", {
                name: name,
                backgroundColor: selectedColor,
              })
            }
            style={styles.startButton}
            color="#757083"
          />
        </View>
        {/* to prevent  the keyboard covers the name and background color picker */}
        {Platform.OS === "ios" ? (
          <KeyboardAvoidingView behavior="padding" />
        ) : null}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  title: {
    flex: 6,
    padding: "25%",
    fontSize: 45,
    fontWeight: "600",
    color: "#ffffff",
  },
  whiteContainer: {
    width: "88%",
    height: "44%",
    justifyContent: "center",
    backgroundColor: "white",
    bottom: 0,
    alignItems: "center",
    marginBottom: "6%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#757083",
    padding: 18,
    marginLeft: 20,
    marginRight: 20,
    marginTop: -10,
    marginBottom: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
  },
  fontColor: {
    fontSize: 16,
    color: "#757083",
    fontWeight: "300",
    marginTop: 10,
  },
  colorButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  colorButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10,
    //opacity: 0.5,
  },
  startButton: {
    backgroundColor: "#757083",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#090C08",
  },
});

export default Start;
