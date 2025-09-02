import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.container}>
      {/* Album Art */}
      <Image
        source={require("./assets/albumcover/Sincerely.jpg")}
  style={styles.albumArt}
      />

      {/* Song Info */}
      <Text style={styles.songTitle}>Daggers!</Text>
      <Text style={styles.artistName}>Kali Uchis</Text>

      
      <View style={styles.controls}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="skip-previous" size={40} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={togglePlayPause}>
          <MaterialCommunityIcons
            name={isPlaying ? "pause-circle" : "play-circle"}
            size={80}
            color="#b91db1ff"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialCommunityIcons name="skip-next" size={40} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Progress Bar */}
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        value={progress}
        onValueChange={(val) => setProgress(val)}
        minimumTrackTintColor="#b91db1ff"
        maximumTrackTintColor="#777"
        thumbTintColor="#b91db1ff"
      />

      {/* Optional Buttons */}
      <View style={styles.optionalButtons}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="heart-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="shuffle" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="repeat" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f368e3ff", 
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  albumArt: {
    width: 320,
    height: 320,
    borderRadius: 20,
    marginBottom: 25,
    shadowColor: "#000",
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 12,
  },
  songTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
    textAlign: "center",
  },
  artistName: {
    fontSize: 18,
    color: "#ffffffff",
    marginBottom: 25,
    textAlign: "center",
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "80%",
    marginVertical: 25,
  },
  slider: {
    width: "90%",
    height: 40,
  },
  optionalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    marginTop: 20,
  },
});