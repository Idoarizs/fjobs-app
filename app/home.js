import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { Stack, useRouter } from "expo-router"

// Custom Components & Styles
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components"
import { COLORS, icons, images, SIZES } from "../constants"

export default function Home() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>This is home page</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}