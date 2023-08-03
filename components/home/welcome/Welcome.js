import styles from "./welcome.style";

import { icons, SIZES } from "../../../constants";
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Welcome() {
  const router = useRouter();
  const jobTypes = ["Full-time", "Part-time", "Contractor"];

  const [searchTerm, setSearchTerm] = useState()
  const [activeJobType, setActiveJobType] = useState("Full-time");

  // Custom Button Component
  const jobBtn = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.tab(activeJobType, item)}
        onPress={() => {
          setActiveJobType(item);
          // router.push(`/search/${item}`);
        }}
      >
        <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Selamat datang!</Text>
        <Text style={styles.welcomeMessage}>Cari pekerjaan impianmu</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='Apa yang ingin dicari?'
          />
        </View>
      </View>

      <FlatList
        data={jobTypes}
        renderItem={jobBtn}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: SIZES.small }}
        horizontal
      />
    </View>
  )
}